import React, { useState, useEffect } from 'react';
import './UserProfile.css'; // Optional: Add styles for the component

const UserProfile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch user data and orders from an API or mock data
        const fetchUserData = async () => {
            const userData = {
                name: 'John Doe',
                email: 'john.doe@example.com',
                phone: '123-456-7890',
            };
            const userOrders = [
                { id: 1, title: 'Order #1', link: '/orders/1' },
                { id: 2, title: 'Order #2', link: '/orders/2' },
            ];
            setUser(userData);
            setOrders(userOrders);
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Save updated user data (e.g., send to API)
        setIsEditing(false);
        console.log('User data saved:', user);
    };

    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <div className="profile-section">
                <label>
                    Name:
                    {isEditing ? (
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <span>{user.name}</span>
                    )}
                </label>
                <label>
                    Email:
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <span>{user.email}</span>
                    )}
                </label>
                <label>
                    Phone:
                    {isEditing ? (
                        <input
                            type="text"
                            name="phone"
                            value={user.phone}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <span>{user.phone}</span>
                    )}
                </label>
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}
            </div>
            <div className="orders-section">
                <h2>Past Orders</h2>
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            <a href={order.link}>{order.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserProfile;