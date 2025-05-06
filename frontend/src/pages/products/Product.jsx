import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Navigation from '../../components/Navigation';
import ProductCard from '../../components/ProductCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { Search } from 'lucide-react';

const Products = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State for products, loading, search, and wishlisted items
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistedItems, setWishlistedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Mock data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockProducts = [
        {
          id: '1',
          name: 'Premium Oak Table',
          description: 'Handcrafted oak table with a smooth finish, perfect for dining or working.',
          image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000',
          price: 199.99,
          category: 'wood'
        },
        {
          id: '2',
          name: 'Glass Coffee Table',
          description: 'Modern glass coffee table with metal frame, elegant centerpiece for any living room.',
          image: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?q=80&w=1000',
          price: 149.99,
          category: 'glass'
        },
        {
          id: '3',
          name: 'Walnut Bookshelf',
          description: 'Sturdy walnut bookshelf with five shelves, beautiful grain and rich color.',
          image: 'https://images.unsplash.com/photo-1588191376136-2d438a3514a0?q=80&w=1000',
          price: 259.99,
          category: 'wood'
        },
        {
          id: '4',
          name: 'Glass Display Cabinet',
          description: 'Elegant glass display cabinet with LED lighting and adjustable shelves.',
          image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000',
          price: 329.99,
          category: 'glass'
        },
        {
          id: '5',
          name: 'Maple Desk',
          description: 'Solid maple wood desk with modern design, spacious work surface.',
          image: 'https://images.unsplash.com/photo-1649413292945-2cd2f24e88e1?q=80&w=1000',
          price: 279.99,
          category: 'wood'
        },
        {
          id: '6',
          name: 'Glass Side Table',
          description: 'Minimalist glass side table with brass accents, perfect for modern interiors.',
          image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1000',
          price: 119.99,
          category: 'glass'
        }
      ];
      
      setProducts(mockProducts);
      setLoading(false);
    }, 800);
  }, []);
  
  // Filter products based on search query and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Handle adding product to cart
  const handleAddToCart = (productId) => {
    toast({
      title: 'Added to cart',
      description: 'Product has been added to your cart',
    });
    console.log('Adding product to cart:', productId);
  };
  
  // Handle viewing product details
  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };
  
  // Handle toggling wishlist
  const handleToggleWishlist = (productId) => {
    setWishlistedItems(prev => {
      if (prev.includes(productId)) {
        toast({
          title: 'Removed from wishlist',
          description: 'Product has been removed from your wishlist',
        });
        return prev.filter(id => id !== productId);
      } else {
        toast({
          title: 'Added to wishlist',
          description: 'Product has been added to your wishlist',
        });
        return [...prev, productId];
      }
    });
  };

  return (
    <div className="min-h-screen bg-blue-50/50">
      {/* <Navigation /> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Our Products</h1>
        <p className="text-blue-600 mb-8">Browse our selection of premium wood and glass products</p>
        
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <Tabs 
            defaultValue="all" 
            className="w-full md:w-auto"
            onValueChange={setActiveCategory}
          >
            <TabsList className="h-14 rounded-full bg-white shadow-sm">
              <TabsTrigger 
                value="all" 
                className="px-8 text-xl rounded-full data-[state=active]:bg-white data-[state=active]:text-[#2B3A67] data-[state=active]:shadow-sm"
              >
                All Products
              </TabsTrigger>
              <TabsTrigger 
                value="wood" 
                className="px-8 text-xl text-[#6B7280] rounded-full data-[state=active]:bg-white data-[state=active]:text-[#2B3A67] data-[state=active]:shadow-sm"
              >
                Wood
              </TabsTrigger>
              <TabsTrigger 
                value="glass" 
                className="px-8 text-xl text-[#6B7280] rounded-full data-[state=active]:bg-white data-[state=active]:text-[#2B3A67] data-[state=active]:shadow-sm"
              >
                Glass
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="relative w-full md:w-64">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
                <div className="bg-gray-200 h-6 rounded mb-2 w-3/4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded mb-4 w-1/2"></div>
                <div className="flex justify-between">
                  <div className="bg-gray-200 h-8 rounded w-24"></div>
                  <div className="bg-gray-200 h-8 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => handleAddToCart(product.id)}
                    onViewDetails={() => handleViewDetails(product.id)}
                    onToggleWishlist={() => handleToggleWishlist(product.id)}
                    isWishlisted={wishlistedItems.includes(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium text-blue-800 mb-2">No products found</h2>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                {searchQuery && (
                  <Button
                    onClick={() => setSearchQuery('')}
                    variant="outline"
                    className="mt-4"
                  >
                    Clear Search
                  </Button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
