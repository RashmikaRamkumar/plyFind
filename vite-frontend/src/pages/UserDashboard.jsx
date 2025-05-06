import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
    const [userData, setUserData] = useState(null);
    const [recentOrders, setRecentOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch user data
                const userResponse = await axios.get('http://localhost:5000/api//user');
                setUserData(userResponse.data);

                // Fetch recent orders
                const ordersResponse = await axios.get('http://localhost:5000/api//orders/recent');
                setRecentOrders(ordersResponse.data);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                navigate('/login'); // Redirect to login if not authenticated
            }
        };

        fetchData();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-dashboard">
            <nav>
                <button onClick={() => navigate('/profile')}>Profile</button>
                <button onClick={() => navigate('/orders')}>Orders</button>
            </nav>

            <section className="account-summary">
                <h2>Account Summary</h2>
                <p>Name: {userData.name}</p>
                <p>Email: {userData.email}</p>
                <p>Joined: {new Date(userData.joinedDate).toLocaleDateString()}</p>
            </section>

            <section className="recent-orders">
                <h2>Recent Orders</h2>
                {recentOrders.length > 0 ? (
                    <ul>
                        {recentOrders.map((order) => (
                            <li key={order.id}>
                                <p>Order ID: {order.id}</p>
                                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                                <p>Total: ${order.total.toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No recent orders found.</p>
                )}
            </section>
        </div>
    );
};

export default UserDashboard;