import React from 'react';
import { Product } from '../types';
import { formatPrice } from '../utils/calculations';
import { ShoppingCart, Info, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isSelected: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, isSelected }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg ${
        isSelected ? 'ring-2 ring-blue-500 scale-[1.02]' : ''
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {product.isCustomQuote && (
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1">
            Custom Quote
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {product.subcategory || product.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center mb-3">
          <div>
            <span className="text-blue-900 font-bold">
              {formatPrice(product.basePrice)}
            </span>
            <span className="text-gray-500 text-sm ml-1">/ {product.unit}</span>
          </div>
          
          {product.availableThicknesses && (
            <div className="text-xs text-gray-500">
              {product.availableThicknesses.length} thickness options
            </div>
          )}
        </div>
        
        <div className="flex space-x-2">
          <button 
            className={`flex-1 py-2 rounded flex items-center justify-center text-sm transition-colors ${
              isSelected 
                ? 'bg-blue-700 text-white hover:bg-blue-800' 
                : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
            }`}
            onClick={() => onSelect(product)}
          >
            {isSelected ? (
              <>
                <Info size={16} className="mr-1" />
                Selected
              </>
            ) : (
              <>
                <ShoppingCart size={16} className="mr-1" />
                Select
              </>
            )}
          </button>
          
          {product.isCustomQuote && (
            <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded flex items-center justify-center text-sm hover:bg-gray-200 transition-colors">
              <ExternalLink size={16} className="mr-1" />
              Get Quote
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;