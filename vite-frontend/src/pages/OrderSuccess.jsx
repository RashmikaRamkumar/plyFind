import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = ({ order }) => {
    const navigate = useNavigate();

    if (!order) {
        return <p>Loading order details...</p>;
    }

    const { orderId, items, totalPrice, deliveryDate } = order;

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Order Confirmed!</h1>
            <p>Thank you for your purchase. Your order has been successfully placed.</p>
            <div style={{ margin: '20px 0', textAlign: 'left', display: 'inline-block' }}>
                <h3>Order Details</h3>
                <p><strong>Order ID:</strong> {orderId}</p>
                <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
                <p><strong>Delivery Expected By:</strong> {deliveryDate}</p>
                <h4>Ordered Items:</h4>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={() => navigate('/shop')} style={{ marginRight: '10px' }}>
                    Continue Shopping
                </button>
                <button onClick={() => navigate(`/orders/${orderId}`)}>
                    View Order Details
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;