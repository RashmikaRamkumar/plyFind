import React, { useState } from 'react';
import axios from 'axios';
import { FaLock, FaEnvelope, FaUserShield, FaHome, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://plyfind.onrender.com/api/admin/login', { email, password });
      localStorage.setItem('adminToken', response.data.token);
      window.location.href = '/admin/dashboard';
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-wood-light to-glass-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <Link 
        to="/" 
        className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200"
      >
        <FaHome className="text-wood-dark" />
        <span className="text-wood-dark font-medium">Back to Home</span>
      </Link>

      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-10 backdrop-blur-sm">
        <div className="mb-10">
          <div className="flex justify-center mb-6">
            <FaUserShield className="h-12 w-12 text-wood-dark" />
          </div>
          <h2 className="text-center text-3xl font-bold text-wood-dark">
            Admin Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Secure access to dashboard
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-dark focus:border-transparent transition-all duration-200"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-dark focus:border-transparent transition-all duration-200"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center mb-6">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-wood-dark rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200"
          >
            <FaSignInAlt className="text-wood-dark" />
            <span className="text-wood-dark font-medium">Sign in to Dashboard</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;