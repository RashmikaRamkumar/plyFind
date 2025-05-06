import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for saved tokens on component mount
    const userToken = localStorage.getItem('userToken');
    const adminToken = localStorage.getItem('adminToken');
    const userId = localStorage.getItem('userId');
    
    if (userToken && userId) {
      setUser({ token: userToken, userId });
    }
    
    if (adminToken) {
      setAdmin({ token: adminToken });
    }
    
    setLoading(false);
  }, []);

  const loginUser = async (email, password) => {
    try {
      setError(null);
      const response = await axios.post('http://localhost:5000/api/users/login', { 
        email, 
        password 
      });
      
      const { token, userId, name } = response.data;
      
      // Save to state and localStorage
      setUser({ token, userId, name });
      localStorage.setItem('userToken', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userName', name);
      
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      return { success: false, error: err.response?.data?.message || 'Login failed' };
    }
  };

  const registerUser = async (userData) => {
    try {
      setError(null);
      const response = await axios.post('http://localhost:5000/api/users/register', userData);
      
      // Auto-login after successful registration
      const { token, userId, name } = response.data;
      
      setUser({ token, userId, name });
      localStorage.setItem('userToken', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userName', name);
      
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      return { success: false, error: err.response?.data?.message || 'Registration failed' };
    }
  };

  const loginAdmin = async (email, password) => {
    try {
      setError(null);
      const response = await axios.post('http://localhost:5000/api/admin/login', { 
        email, 
        password 
      });
      
      const { token } = response.data;
      
      setAdmin({ token });
      localStorage.setItem('adminToken', token);
      
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || 'Admin login failed');
      return { success: false, error: err.response?.data?.message || 'Admin login failed' };
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
  };

  const logoutAdmin = () => {
    setAdmin(null);
    localStorage.removeItem('adminToken');
  };

  return (
    <AuthContext.Provider value={{
      user,
      admin,
      loading,
      error,
      loginUser,
      registerUser,
      loginAdmin,
      logoutUser,
      logoutAdmin,
      isAuthenticated: !!user,
      isAdmin: !!admin
    }}>
      {children}
    </AuthContext.Provider>
  );
};