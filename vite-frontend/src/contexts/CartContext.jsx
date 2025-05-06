import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  // Fetch cart data when user changes
  useEffect(() => {
    if (user?.userId) {
      fetchCart(user.userId);
    } else {
      // Clear cart when logged out
      setCart([]);
    }
  }, [user]);

  const fetchCart = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/cart/${userId}`);
      setCart(response.data.cart || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching cart:', err);
      setError('Failed to load cart');
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity, customDimensions) => {
    if (!user?.userId) {
      setError('Please log in to add items to cart');
      return { success: false, error: 'Please log in to add items to cart' };
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/cart', {
        userId: user.userId,
        productId,
        quantity,
        customDimensions
      });
      
      setCart(response.data.cart);
      setError(null);
      return { success: true };
    } catch (err) {
      console.error('Error adding to cart:', err);
      setError('Failed to add item to cart');
      return { success: false, error: err.response?.data?.message || 'Failed to add item to cart' };
    } finally {
      setLoading(false);
    }
  };

  const updateCartItem = async (productId, quantity, customDimensions) => {
    if (!user?.userId) return;
    
    setLoading(true);
    try {
      const response = await axios.put('http://localhost:5000/api/cart', {
        userId: user.userId,
        productId,
        quantity,
        customDimensions
      });
      
      setCart(response.data.cart);
      setError(null);
    } catch (err) {
      console.error('Error updating cart:', err);
      setError('Failed to update cart');
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    if (!user?.userId) return;
    
    setLoading(true);
    try {
      const response = await axios.delete('http://localhost:5000/api/cart', {
        data: {
          userId: user.userId,
          productId
        }
      });
      
      setCart(response.data.cart);
      setError(null);
    } catch (err) {
      console.error('Error removing from cart:', err);
      setError('Failed to remove item from cart');
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    if (!user?.userId) return;
    
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/cart/${user.userId}/clear`);
      setCart([]);
      setError(null);
    } catch (err) {
      console.error('Error clearing cart:', err);
      setError('Failed to clear cart');
    } finally {
      setLoading(false);
    }
  };

  // Calculate total cart price
  const cartTotal = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{
      cart,
      loading,
      error,
      addToCart,
      updateCartItem,
      removeFromCart,
      clearCart,
      cartTotal,
      itemCount: cart.length
    }}>
      {children}
    </CartContext.Provider>
  );
};