import React from 'react';
import { Menu, Phone, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-800 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">WE</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-900">WoodEstimator</h1>
            <p className="text-xs text-blue-600">Premium Material Calculator</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-blue-900 hover:text-blue-700 font-medium">Home</a>
          <a href="#" className="text-blue-900 hover:text-blue-700 font-medium">Products</a>
          <a href="#" className="text-blue-900 hover:text-blue-700 font-medium">Estimator</a>
          <a href="#" className="text-blue-900 hover:text-blue-700 font-medium">About Us</a>
          <a href="#" className="text-blue-900 hover:text-blue-700 font-medium">Contact</a>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <a href="tel:+9112345678" className="flex items-center text-blue-700 hover:text-blue-900">
            <Phone size={18} className="mr-1" />
            <span>+91 1234 5678</span>
          </a>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            Request Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-50 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#" className="text-blue-900 hover:text-blue-700 py-2 border-b border-blue-200">Home</a>
            <a href="#" className="text-blue-900 hover:text-blue-700 py-2 border-b border-blue-200">Products</a>
            <a href="#" className="text-blue-900 hover:text-blue-700 py-2 border-b border-blue-200">Estimator</a>
            <a href="#" className="text-blue-900 hover:text-blue-700 py-2 border-b border-blue-200">About Us</a>
            <a href="#" className="text-blue-900 hover:text-blue-700 py-2 border-b border-blue-200">Contact</a>
            <div className="flex flex-col space-y-2 pt-2">
              <a href="tel:+9112345678" className="flex items-center text-blue-700 hover:text-blue-900">
                <Phone size={18} className="mr-1" />
                <span>+91 1234 5678</span>
              </a>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md w-full">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;