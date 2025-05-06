
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Logo from './Logo';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm = ({ type }: AuthFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // This would be replaced with actual API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (type === 'signup') {
        if (formData.password !== formData.confirmPassword) {
          toast({
            title: 'Passwords do not match',
            description: 'Please ensure your passwords match.',
            variant: 'destructive',
          });
          setIsLoading(false);
          return;
        }
        
        // Simulated signup success
        toast({
          title: 'Account created!',
          description: 'Welcome to Glasswood!',
        });
      } else {
        // Simulated login success
        toast({
          title: 'Welcome back!',
          description: 'You have successfully logged in.',
        });
      }
      
      // Navigate to dashboard on success
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      toast({
        title: 'Authentication failed',
        description: 'Please check your details and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-blue-50/50">
      <div className="w-full max-w-md animate-fade-in">
        <div className="flex justify-center mb-6">
          <Logo size="lg" />
        </div>
        
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-800">
              {type === 'login' ? 'Sign In' : 'Create Account'}
            </CardTitle>
            <CardDescription>
              {type === 'login' 
                ? 'Enter your details to access your account' 
                : 'Fill in the information below to create your account'}
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {type === 'signup' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      value={formData.name} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="(123) 456-7890" 
                      value={formData.phone} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  value={formData.email} 
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  {type === 'login' && (
                    <a 
                      href="#" 
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={formData.password} 
                  onChange={handleChange}
                  required 
                />
              </div>
              
              {type === 'signup' && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="••••••••" 
                    value={formData.confirmPassword} 
                    onChange={handleChange}
                    required 
                  />
                </div>
              )}
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full text-white blue-gradient" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  type === 'login' ? 'Sign In' : 'Create Account'
                )}
              </Button>
              
              <div className="text-center">
                {type === 'login' ? (
                  <div className="text-sm">
                    Don't have an account?{' '}
                    <a 
                      href="/signup" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Create one
                    </a>
                  </div>
                ) : (
                  <div className="text-sm">
                    Already have an account?{' '}
                    <a 
                      href="/login" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Sign in
                    </a>
                  </div>
                )}
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AuthForm;
