import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Users, 
  MessageSquare, 
  Mail, 
  Home,
  LogOut 
} from 'lucide-react';
import jwt_decode from 'jwt-decode';

const AdminDashboard = () => {
  const [adminEmail, setAdminEmail] = useState('');
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    pendingEnquiries: 0,
    unreadContacts: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    try {
      // Extract admin info from token
      const decoded = jwt_decode(token);
      fetchAdminInfo(decoded.id);
      fetchDashboardStats();
    } catch (error) {
      console.error('Invalid token:', error);
      localStorage.removeItem('adminToken');
      navigate('/admin/login');
    }
  }, [navigate]);

  const fetchAdminInfo = async (adminId) => {
    try {
      const response = await fetch(`/api/admin/profile/${adminId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setAdminEmail(data.email);
      }
    } catch (error) {
      console.error('Error fetching admin info:', error);
    }
  };

  const fetchDashboardStats = async () => {
    try {
      // You would implement these endpoints in your backend
      const productsResponse = await fetch('http://localhost:5000/api//products');
      const products = await productsResponse.json();
      
      const stats = {
        totalProducts: products.length,
        totalOrders: 0,
        pendingEnquiries: 0,
        unreadContacts: 0
      };
      
      // Fetch other stats as needed
      try {
        const ordersResponse = await fetch('http://localhost:5000/api//order', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
          }
        });
        if (ordersResponse.ok) {
          const orders = await ordersResponse.json();
          stats.totalOrders = orders.length;
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
      
      try {
        const enquiriesResponse = await fetch('http://localhost:5000/api//admin/enquiries', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
          }
        });
        if (enquiriesResponse.ok) {
          const enquiries = await enquiriesResponse.json();
          stats.pendingEnquiries = enquiries.filter(e => e.status === 'pending').length;
        }
      } catch (error) {
        console.error('Error fetching enquiries:', error);
      }
      
      try {
        const contactsResponse = await fetch('http://localhost:5000/api//admin/contacts', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
          }
        });
        if (contactsResponse.ok) {
          const contacts = await contactsResponse.json();
          stats.unreadContacts = contacts.filter(c => !c.adminResponse).length;
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
      
      setStats(stats);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-800 text-white py-6 flex flex-col">
        <div className="px-6 mb-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          {adminEmail && (
            <p className="text-sm text-indigo-200 mt-1">Welcome, {adminEmail}</p>
          )}
        </div>
        
        <nav className="flex-1">
          <Link to="/admin/dashboard" className="flex items-center px-6 py-3 text-indigo-100 hover:bg-indigo-700">
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link to="/admin/products" className="flex items-center px-6 py-3 text-indigo-100 hover:bg-indigo-700">
            <ShoppingBag className="mr-3 h-5 w-5" />
            Products
          </Link>
          <Link to="/admin/orders" className="flex items-center px-6 py-3 text-indigo-100 hover:bg-indigo-700">
            <Users className="mr-3 h-5 w-5" />
            Orders
          </Link>
          <Link to="/admin/enquiries" className="flex items-center px-6 py-3 text-indigo-100 hover:bg-indigo-700">
            <MessageSquare className="mr-3 h-5 w-5" />
            Enquiries
            {stats.pendingEnquiries > 0 && (
              <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                {stats.pendingEnquiries}
              </span>
            )}
          </Link>
          <Link to="/admin/contacts" className="flex items-center px-6 py-3 text-indigo-100 hover:bg-indigo-700">
            <Mail className="mr-3 h-5 w-5" />
            Contacts
            {stats.unreadContacts > 0 && (
              <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                {stats.unreadContacts}
              </span>
            )}
          </Link>
        </nav>
        
        <div className="px-6 mt-auto">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-indigo-100 hover:bg-indigo-700 rounded"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* If we're at the dashboard root path, show the dashboard stats */}
          {window.location.pathname === '/admin/dashboard' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-5">
                  <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
                  <p className="text-3xl font-bold text-gray-800">{stats.totalProducts}</p>
                  <Link to="/admin/products" className="text-indigo-600 text-sm hover:underline">
                    View all products
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow p-5">
                  <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
                  <p className="text-3xl font-bold text-gray-800">{stats.totalOrders}</p>
                  <Link to="/admin/orders" className="text-indigo-600 text-sm hover:underline">
                    View all orders
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow p-5">
                  <h3 className="text-gray-500 text-sm font-medium">Pending Enquiries</h3>
                  <p className="text-3xl font-bold text-gray-800">{stats.pendingEnquiries}</p>
                  <Link to="/admin/enquiries" className="text-indigo-600 text-sm hover:underline">
                    View all enquiries
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow p-5">
                  <h3 className="text-gray-500 text-sm font-medium">Unread Contacts</h3>
                  <p className="text-3xl font-bold text-gray-800">{stats.unreadContacts}</p>
                  <Link to="/admin/contacts" className="text-indigo-600 text-sm hover:underline">
                    View all contacts
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {/* Outlet for nested routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;