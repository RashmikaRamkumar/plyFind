import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            // Replace with your backend API endpoint
            const response = await axios.post('http://localhost:5000/api//auth/login', { email, password });

            // Assuming the response contains user data
            const { userId, name } = response.data;

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify({ userId, name }));

            // Redirect to UserDashboard or previous page
            navigate('/user-dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>User Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default UserLogin;