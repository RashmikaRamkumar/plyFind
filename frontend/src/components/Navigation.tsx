
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Package, ShoppingBag, LogOut } from 'lucide-react';
import Logo from './Logo';
import { useToast } from '@/hooks/use-toast';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: <Package size={18} className="mr-2" /> 
    },
    { 
      name: 'Products', 
      path: '/products', 
      icon: <ShoppingBag size={18} className="mr-2" /> 
    },
    { 
      name: 'Orders', 
      path: '/orders', 
      icon: <Package size={18} className="mr-2" /> 
    },
  ];

  const handleLogout = () => {
    // In a real app, this would clear authentication tokens
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/login');
  };

  const handleUserProfile = () => {
    navigate('/profile');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex-shrink-0 flex items-center">
              <Logo />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === item.path
                      ? 'border-blue-500 text-blue-700'
                      : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                <ShoppingCart size={20} />
              </Button>
            </Link>
            
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-blue-600"
                onClick={handleUserProfile}
              >
                <User size={20} />
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-blue-600"
              onClick={handleLogout}
            >
              <LogOut size={20} />
            </Button>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white pb-3 pt-2">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block pl-3 pr-4 py-2 text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700'
                    : 'border-l-4 border-transparent text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon}
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-3">
              <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <ShoppingCart size={20} className="mr-2" />
                  Cart
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600"
                onClick={() => {
                  handleUserProfile();
                  setIsMenuOpen(false);
                }}
              >
                <User size={20} className="mr-2" />
                Profile
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600"
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
              >
                <LogOut size={20} className="mr-2" />
                Sign out
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
