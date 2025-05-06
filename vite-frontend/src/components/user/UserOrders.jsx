import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserOrders = ({ userId }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`/api/order/${userId}`);
                setOrders(response.data);
            } catch (err) {
                setError('Failed to fetch orders');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [userId]);

    const cancelOrder = async (orderId) => {
        try {
            await axios.delete(`/api/order/${orderId}`);
            setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        } catch (err) {
            alert('Failed to cancel order');
        }
    };

    if (loading) return <p>Loading orders...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>User Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Products</th>
                            <th>Total Price</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>
                                    {order.products.map((product, index) => (
                                        <div key={index}>
                                            {product.name} (x{product.quantity})
                                        </div>
                                    ))}
                                </td>
                                <td>${order.totalPrice.toFixed(2)}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td>
                                    {order.orderStatus === 'Pending' && (
                                        <button onClick={() => cancelOrder(order._id)}>Cancel</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserOrders;