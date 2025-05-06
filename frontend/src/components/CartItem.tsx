
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2 } from 'lucide-react';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
    size: string;
    dimensions: string;
  };
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onUpdateSize: (id: string, size: string) => void;
  onUpdateDimensions: (id: string, dimensions: string) => void;
}

const CartItem = ({ 
  item, 
  onRemove, 
  onUpdateQuantity,
  onUpdateSize,
  onUpdateDimensions
}: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onUpdateQuantity(item.id, newQuantity);
    }
  };
  
  return (
    <div className="flex flex-col sm:flex-row border-b border-gray-200 py-4">
      <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover rounded-md" 
        />
      </div>
      
      <div className="flex-grow sm:ml-4">
        <h3 className="text-lg font-medium text-blue-800">{item.name}</h3>
        <div className="mt-1 text-gray-600 text-sm">
          Unit Price: ${item.price.toFixed(2)}
        </div>
        
        <div className="mt-2 flex flex-wrap gap-4">
          <div className="w-24">
            <label className="block text-xs text-gray-600 mb-1">Quantity</label>
            <div className="flex items-center border rounded-md">
              <Button 
                variant="ghost"
                size="sm"
                className="h-8 px-2 hover:bg-gray-100 border-r rounded-none"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="h-8 w-10 text-center border-none p-0"
                min="1"
              />
              <Button 
                variant="ghost"
                size="sm"
                className="h-8 px-2 hover:bg-gray-100 border-l rounded-none"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>
          
          <div className="w-32">
            <label className="block text-xs text-gray-600 mb-1">Size</label>
            <Select
              defaultValue={item.size}
              onValueChange={(value) => onUpdateSize(item.id, value)}
            >
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-36">
            <label className="block text-xs text-gray-600 mb-1">Dimensions</label>
            <Select
              defaultValue={item.dimensions}
              onValueChange={(value) => onUpdateDimensions(item.id, value)}
            >
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Select dimensions" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="12x24">12" x 24"</SelectItem>
                  <SelectItem value="24x36">24" x 36"</SelectItem>
                  <SelectItem value="36x48">36" x 48"</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-end justify-between mt-4 sm:mt-0 ml-0 sm:ml-4">
        <div className="font-semibold text-blue-900 text-lg">
          ${(item.price * quantity).toFixed(2)}
        </div>
        
        <Button 
          variant="ghost"
          size="sm"
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 h-8"
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
