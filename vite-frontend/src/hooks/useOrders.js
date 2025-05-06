// hooks/useOrders.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './useAuth';

export const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.userId) {
        setOrders([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/order/${user.userId}`);
        setOrders(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  const placeOrder = async (paymentType) => {
    if (!user?.userId) {
      return { success: false, error: 'User not authenticated' };
    }

    try {
      const response = await axios.post('http://localhost:5000/api/order', {
        userId: user.userId,
        paymentType
      });

      // Add the new order to the orders state
      setOrders(prevOrders => [response.data.order, ...prevOrders]);
      
      return { success: true, order: response.data.order };
    } catch (err) {
      console.error('Error placing order:', err);
      return { success: false, error: err.response?.data?.message || 'Failed to place order' };
    }
  };

  const cancelOrder = async (orderId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/order/${orderId}`);
      
      // Update orders list
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.orderId === orderId 
            ? { ...order, orderStatus: 'cancelled' } 
            : order
        )
      );
      
      return { success: true };
    } catch (err) {
      console.error('Error cancelling order:', err);
      return { success: false, error: err.response?.data?.message || 'Failed to cancel order' };
    }
  };

  return { orders, loading, error, placeOrder, cancelOrder };
};