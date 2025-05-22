import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-wood-dark">Rakesh</span>
            <div className="flex">
              <span className="text-2xl font-bold text-glass-dark">Glass</span>
              <span className="text-2xl font-bold text-wood">&</span>
              <span className="text-2xl font-bold text-wood-dark">Plywood</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-wood-dark font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-wood-dark font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="text-foreground hover:text-wood-dark font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/enquiry"
              className="text-foreground hover:text-wood-dark font-medium transition-colors"
            >
              Enquiry
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-wood-dark font-medium transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://priceestimator-gamma.vercel.app"
              className="text-foreground hover:text-wood-dark font-medium transition-colors"
            >
              Price Calculator
            </a>
            <Link
              to="/admin"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-wood-dark rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200"
            >
              <FaUserShield className="text-wood-dark" />
              <span className="text-wood-dark font-medium">Admin Login</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-wood-dark focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-wood-dark font-medium transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-wood-dark font-medium transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-foreground hover:text-wood-dark font-medium transition-colors"
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link
                to="/enquiry"
                className="text-foreground hover:text-wood-dark font-medium transition-colors"
                onClick={toggleMenu}
              >
                Enquiry
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-wood-dark font-medium transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <a
                href="https://priceestimator-gamma.vercel.app/"
                className="text-foreground hover:text-wood-dark font-medium transition-colors"
                onClick={toggleMenu}
              >
                Price Calculator
              </a>
              <Link
                to="/admin"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-wood-dark rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200 w-fit"
                onClick={toggleMenu}
              >
                <FaUserShield className="text-wood-dark" />
                <span className="text-wood-dark font-medium">Admin Login</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
