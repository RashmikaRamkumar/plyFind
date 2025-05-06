import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onViewDetails,
  onToggleWishlist,
  isWishlisted 
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover" 
        />
        <button 
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          <Heart 
            size={18} 
            className={`${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
          />
        </button>
        <div className="absolute bottom-0 left-0 bg-blue-500 text-white px-3 py-1 text-xs font-medium uppercase tracking-wide">
          {product.category}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-medium text-lg text-blue-800 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">{product.description}</p>
        <div className="font-semibold text-blue-900">${product.price.toFixed(2)}</div>
      </CardContent>
      
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-blue-600 border-blue-200 hover:bg-blue-50"
          onClick={() => onViewDetails(product.id)}
        >
          Learn More
        </Button>
        <Button 
          size="sm" 
          style={{ backgroundColor: '#0059B3',color : 'white' }}
          onClick={() => onAddToCart(product.id)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;