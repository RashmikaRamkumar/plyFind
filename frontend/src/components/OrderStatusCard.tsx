
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Clock, Package } from 'lucide-react';

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: {
    name: string;
    quantity: number;
  }[];
  totalAmount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  paymentMethod: string;
}

interface OrderStatusCardProps {
  order: Order;
  isAdmin?: boolean;
  onStatusChange?: (orderId: string, status: string) => void;
}

const OrderStatusCard = ({ order, isAdmin = false, onStatusChange }: OrderStatusCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Processing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Shipped':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="bg-white shadow-sm hover:shadow transition-shadow duration-300 overflow-hidden">
      <CardHeader className="pb-2 border-b border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-blue-800 text-md">
              Order #{order.orderNumber}
            </CardTitle>
            <div className="text-sm text-gray-500 flex items-center mt-1">
              <Clock size={14} className="mr-1" />
              {new Date(order.date).toLocaleDateString('en-US', { 
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
          
          <Badge variant="outline" className={`${getStatusColor(order.status)} px-2 py-0.5`}>
            {order.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="py-3">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Items:</h4>
          <ul className="space-y-1">
            {order.items.map((item, idx) => (
              <li key={idx} className="text-sm flex justify-between">
                <span className="text-gray-600">{item.name}</span>
                <span className="text-gray-600">x{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-3 flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-700">Payment</span>
          <span className="text-sm text-gray-600">{order.paymentMethod}</span>
        </div>
        
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm font-medium text-blue-700">Total Amount</span>
          <span className="font-medium text-blue-800">${order.totalAmount.toFixed(2)}</span>
        </div>
      </CardContent>
      
      {isAdmin && (
        <CardFooter className="pt-2 pb-3 bg-gray-50">
          <div className="w-full flex justify-between items-center">
            <span className="text-sm text-gray-700 font-medium">Update Status:</span>
            <div className="w-36">
              <Select
                defaultValue={order.status}
                onValueChange={(value) => onStatusChange && onStatusChange(order.id, value)}
              >
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue placeholder="Update status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Processing">Processing</SelectItem>
                    <SelectItem value="Shipped">Shipped</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default OrderStatusCard;
