import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, admin, logoutUser, logoutAdmin } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (user) {
      logoutUser();
    }
    if (admin) {
      logoutAdmin();
    }
    navigate('/');
  };

  return (
    <header className="bg-indigo-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">PlyFind</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-indigo-200 transition">Home</Link>
            <Link to="/products" className="hover:text-indigo-200 transition">Products</Link>
            <Link to="/about" className="hover:text-indigo-200 transition">About</Link>
            <Link to="/contact" className="hover:text-indigo-200 transition">Contact</Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative hover:text-indigo-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-indigo-200">
                  <span>{localStorage.getItem('userName') || 'User'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg py-2 hidden group-hover:block z-10">
                  <Link to="/user/dashboard" className="block px-4 py-2 hover:bg-indigo-100">Dashboard</Link>
                  <Link to="/user/orders" className="block px-4 py-2 hover:bg-indigo-100">Orders</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-indigo-100">
                    Logout
                  </button>
                </div>
              </div>
            ) : admin ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-indigo-200">
                  <span>Admin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg py-2 hidden group-hover:block z-10">
                  <Link to="/admin/dashboard" className="block px-4 py-2 hover:bg-indigo-100">Dashboard</Link>
                  <Link to="/admin/products" className="block px-4 py-2 hover:bg-indigo-100">Products</Link>
                  <Link to="/admin/orders" className="block px-4 py-2 hover:bg-indigo-100">Orders</Link>
                  <Link to="/admin/enquiries" className="block px-4 py-2 hover:bg-indigo-100">Enquiries</Link>
                  <Link to="/admin/contacts" className="block px-4 py-2 hover:bg-indigo-100">Contacts</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-indigo-100">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-x-2">
                <Link to="/login" className="hover:text-indigo-200">Login</Link>
                <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-indigo-700">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-indigo-200 transition">Home</Link>
              <Link to="/products" className="hover:text-indigo-200 transition">Products</Link>
              <Link to="/about" className="hover:text-indigo-200 transition">About</Link>
              <Link to="/contact" className="hover:text-indigo-200 transition">Contact</Link>
              <Link to="/cart" className="hover:text-indigo-200 transition flex items-center">
                Cart 
                {itemCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </Link>
              
              {user ? (
                <>
                  <Link to="/user/dashboard" className="hover:text-indigo-200 transition">Dashboard</Link>
                  <Link to="/user/orders" className="hover:text-indigo-200 transition">Orders</Link>
                  <button onClick={handleLogout} className="text-left hover:text-indigo-200 transition">
                    Logout
                  </button>
                </>
              ) : admin ? (
                <>
                  <Link to="/admin/dashboard" className="hover:text-indigo-200 transition">Admin Dashboard</Link>
                  <Link to="/admin/products" className="hover:text-indigo-200 transition">Products</Link>
                  <Link to="/admin/orders" className="hover:text-indigo-200 transition">Orders</Link>
                  <Link to="/admin/enquiries" className="hover:text-indigo-200 transition">Enquiries</Link>
                  <Link to="/admin/contacts" className="hover:text-indigo-200 transition">Contacts</Link>
                  <button onClick={handleLogout} className="text-left hover:text-indigo-200 transition">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:text-indigo-200 transition">Login</Link>
                  <Link to="/register" className="hover:text-indigo-200 transition">Register</Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;