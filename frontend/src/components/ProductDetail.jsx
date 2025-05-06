import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulate API call to fetch product details
    setTimeout(() => {
      const mockProduct = {
        id: id,
        name: 'Premium Oak Table',
        description: 'Handcrafted oak table with a smooth finish, perfect for dining or working.',
        image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000',
        price: 199.99,
        category: 'wood',
        details: 'Additional product specifications and details go here...',
        dimensions: '160cm x 80cm x 75cm',
        material: 'Solid Oak',
        finish: 'Natural Oil'
      };
      
      setProduct(mockProduct);
      setLoading(false);
    }, 800);
  }, [id]);

  const handleAddToCart = () => {
    toast({
      title: 'Added to cart',
      description: `${quantity} ${quantity === 1 ? 'item' : 'items'} added to your cart`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-50/50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="bg-gray-200 h-96 rounded-lg mb-8"></div>
            <div className="bg-gray-200 h-8 w-1/3 rounded mb-4"></div>
            <div className="bg-gray-200 h-4 rounded mb-2"></div>
            <div className="bg-gray-200 h-4 rounded mb-2"></div>
            <div className="bg-gray-200 h-4 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-blue-50/50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50/50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">{product.name}</h1>
            <div className="text-2xl font-semibold text-blue-800 mb-4">
              ${product.price.toFixed(2)}
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-medium text-blue-900">Dimensions</h3>
                <p className="text-gray-600">{product.dimensions}</p>
              </div>
              <div>
                <h3 className="font-medium text-blue-900">Material</h3>
                <p className="text-gray-600">{product.material}</p>
              </div>
              <div>
                <h3 className="font-medium text-blue-900">Finish</h3>
                <p className="text-gray-600">{product.finish}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-20 px-3 py-2 border rounded-md"
              />
              <Button 
                onClick={handleAddToCart}
                size="sm"
                style={{ backgroundColor: '#0059B3',color : 'white' }}
                className="text-white"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;