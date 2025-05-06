
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Check, ShoppingBag } from 'lucide-react';

interface OrderSuccessModalProps {
  orderNumber: string;
  onClose: () => void;
  onViewOrders: () => void;
}

const OrderSuccessModal = ({ orderNumber, onClose, onViewOrders }: OrderSuccessModalProps) => {
  // Emoji animation effect
  useEffect(() => {
    const emojis = ['🎉', '🎊', '✨', '🚀', '🎁', '🥳', '🙌', '👏'];
    const container = document.getElementById('confetti-container');
    
    if (container) {
      const createConfetti = () => {
        const emoji = document.createElement('span');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.classList.add('confetti-emoji');
        
        // Random position and animation
        const startPosX = Math.random() * 100;
        const startPosY = Math.random() * 40 + 20;
        const rotation = Math.random() * 360;
        const size = Math.random() * 20 + 20;
        const duration = Math.random() * 3 + 2;
        
        emoji.style.cssText = `
          position: absolute;
          top: ${startPosY}%;
          left: ${startPosX}%;
          font-size: ${size}px;
          transform: rotate(${rotation}deg);
          animation: fall ${duration}s ease-in forwards;
          opacity: 0;
        `;
        
        container.appendChild(emoji);
        
        // Remove after animation
        setTimeout(() => {
          emoji.remove();
        }, duration * 1000);
      };
      
      // Create multiple emojis
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          createConfetti();
        }, i * 150);
      }
    }
    
    // Add animation styles
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fall {
        0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div id="confetti-container" className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden animate-scale-in">
        <div className="bg-blue-500 text-white py-6 px-8 text-center">
          <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-white text-blue-500">
            <Check size={40} strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-bold">Order Successful!</h2>
          <p className="mt-1 opacity-90">Your order has been placed successfully</p>
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <p className="text-gray-700">Thanks for your purchase! We're preparing your order and will notify you when it's on the way.</p>
            <p className="mt-4 text-blue-700 font-medium">Order #{orderNumber}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
              onClick={onClose}
            >
              Continue Shopping
            </Button>
            <Button 
              className="blue-gradient text-white"
              onClick={onViewOrders}
            >
              <ShoppingBag size={18} className="mr-2" />
              View My Orders
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
