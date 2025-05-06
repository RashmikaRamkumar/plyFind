import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = ({ userId }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Fetch cart items from the API
        const fetchCart = async () => {
            try {
                const response = await axios.get(`/api/cart/${userId}`);
                setCartItems(response.data);
                calculateTotal(response.data);
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };

        fetchCart();
    }, [userId]);

    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => {
            const itemPrice = item.pricePerUnit * item.quantity * item.dimensions;
            return sum + itemPrice;
        }, 0);
        setTotalPrice(total);
    };

    const updateItem = async (itemId, updatedItem) => {
        try {
            const response = await axios.put(`/api/cart/${userId}/${itemId}`, updatedItem);
            setCartItems(response.data);
            calculateTotal(response.data);
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    const removeItem = async (itemId) => {
        try {
            const response = await axios.delete(`/api/cart/${userId}/${itemId}`);
            setCartItems(response.data);
            calculateTotal(response.data);
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };

    const handleCheckout = () => {
        alert("Proceeding to checkout...");
        // Implement checkout logic here
    };

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div>
                                    <h2>{item.productName}</h2>
                                    <p>Dimensions: {item.dimensions}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.pricePerUnit * item.quantity * item.dimensions}</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() =>
                                            updateItem(item.id, {
                                                ...item,
                                                quantity: item.quantity + 1,
                                            })
                                        }
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() =>
                                            updateItem(item.id, {
                                                ...item,
                                                quantity: Math.max(1, item.quantity - 1),
                                            })
                                        }
                                    >
                                        -
                                    </button>
                                    <button onClick={() => removeItem(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;