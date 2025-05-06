import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CartItem from '../components/CartItem';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import OrderSuccessModal from '../components/OrderSuccessModal';

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  // Mock cart data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockCartItems = [
        {
          id: '1',
          name: 'Premium Oak Table',
          image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000',
          price: 199.99,
          quantity: 1,
          size: 'medium',
          dimensions: '6\' x 3\'',
        },
        {
          id: '2',
          name: 'Glass Coffee Table',
          image: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?q=80&w=1000',
          price: 149.99,
          quantity: 2,
          size: 'small',
          dimensions: '24" x 24"',
        }
      ];
      
      setCartItems(mockCartItems);
      setLoading(false);
    }, 800);
  }, []);
  
  // Calculate subtotal, tax, and total
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;
  
  // Handle removing item from cart
  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
    
    toast({
      title: 'Item removed',
      description: 'Item has been removed from your cart',
    });
  };
  
  // Handle updating item quantity
  const handleUpdateQuantity = (itemId, quantity) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  // Handle updating item size
  const handleUpdateSize = (itemId, size) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, size } : item
      )
    );
  };
  
  // Handle updating item dimensions
  const handleUpdateDimensions = (itemId, dimensions) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, dimensions } : item
      )
    );
  };
  
  // Handle placing order
  const handlePlaceOrder = () => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate random order number
      const newOrderNumber = 'ORD-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
      setOrderNumber(newOrderNumber);
      
      setIsProcessing(false);
      setShowSuccessModal(true);
      
      // Clear cart
      setCartItems([]);
    }, 1500);
  };

  // ... Rest of the JSX remains the same as it doesn't need type modifications
  return (
    <div className="min-h-screen bg-blue-50/50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-blue-900 flex items-center mb-8">
          <ShoppingCart className="mr-2" size={32} />
          Your Cart
        </h1>
        
        {loading ? (
          <div className="animate-pulse space-y-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex">
                <div className="w-24 h-24 bg-gray-200 rounded-md"></div>
                <div className="flex-1 ml-4 space-y-2">
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/5"></div>
                </div>
                <div className="w-24 h-6 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <Card>
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="text-lg">
                    Items in Your Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                  </CardTitle>
                </CardHeader>
                <CardContent className="divide-y">
                  {cartItems.map(item => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onRemove={handleRemoveItem}
                      onUpdateQuantity={handleUpdateQuantity}
                      onUpdateSize={handleUpdateSize}
                      onUpdateDimensions={handleUpdateDimensions}
                    />
                  ))}
                </CardContent>
                <CardFooter className="flex justify-between bg-gray-50 px-6">
                  <Button
                    variant="outline"
                    onClick={() => navigate('/products')}
                    className="text-blue-600 border-blue-200 hover:bg-blue-50"
                  >
                    Continue Shopping
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="lg:w-1/3">
              <Card>
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="py-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (8%)</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-blue-700">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Payment Method</h3>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="flex items-center">
                          <span className="ml-2">Cash on Delivery</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center">
                          <span className="ml-2">UPI Payment</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full blue-gradient text-white"
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      'Place Order'
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent className="space-y-4">
              <div className="mx-auto rounded-full bg-blue-100 p-6 w-20 h-20 flex items-center justify-center">
                <ShoppingBag size={32} className="text-blue-500" />
              </div>
              <h2 className="text-2xl font-medium text-blue-800">Your cart is empty</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Looks like you haven't added any products to your cart yet. 
                Browse our collection to find quality wood and glass products.
              </p>
              <div className="pt-4">
                <Button
                  onClick={() => navigate('/products')}
                  className="blue-gradient text-white"
                >
                  Browse Products
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      {showSuccessModal && (
        <OrderSuccessModal
          orderNumber={orderNumber}
          onClose={() => {
            setShowSuccessModal(false);
            navigate('/products');
          }}
          onViewOrders={() => {
            setShowSuccessModal(false);
            navigate('/orders');
          }}
        />
      )}
    </div>
  );
};

export default Cart;
