import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategoryClick = (category) => {
        navigate(`/products?category=${category}`);
        setIsDropdownOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    PlyFind
                </Link>
                <div className="navbar-links">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <div className="dropdown">
                        <button onClick={toggleDropdown} className="dropdown-toggle">
                            Products
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <button onClick={() => handleCategoryClick('glass')}>Glass</button>
                                <button onClick={() => handleCategoryClick('plywood')}>Plywood</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="auth-links">
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <button onClick={onLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}
                </div>
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    ☰
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/about" onClick={toggleMobileMenu}>
                        About
                    </Link>
                    <Link to="/contact" onClick={toggleMobileMenu}>
                        Contact
                    </Link>
                    <button onClick={toggleDropdown} className="dropdown-toggle">
                        Products
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <button onClick={() => handleCategoryClick('glass')}>Glass</button>
                            <button onClick={() => handleCategoryClick('plywood')}>Plywood</button>
                        </div>
                    )}
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" onClick={toggleMobileMenu}>
                                Dashboard
                            </Link>
                            <button onClick={onLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={toggleMobileMenu}>
                                Login
                            </Link>
                            <Link to="/register" onClick={toggleMobileMenu}>
                                Register
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;