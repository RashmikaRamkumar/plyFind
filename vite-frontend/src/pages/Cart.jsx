import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartData, setCartData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                // Check authentication status
                const authResponse = await axios.get('/auth/status');
                if (!authResponse.data.isAuthenticated) {
                    navigate('/login');
                    return;
                }

                // Fetch cart data from Redis
                const cartResponse = await axios.get('/cartRoutes/cart');
                setCartData(cartResponse.data);
            } catch (err) {
                setError('Failed to load cart data.');
            } finally {
                setLoading(false);
            }
        };

        fetchCartData();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Your Cart</h1>
            {cartData.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartData.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.quantity} x ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;