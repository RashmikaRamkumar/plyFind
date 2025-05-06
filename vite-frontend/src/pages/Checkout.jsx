import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getUserAuthStatus, getCartContents } from '../utils/api'; // Assume these are utility functions
import StepOne from '../components/checkout/StepOne';
import StepTwo from '../components/checkout/StepTwo';
import StepThree from '../components/checkout/StepThree';

const Checkout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cart, setCart] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [orderDetails, setOrderDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const verifyUserAndCart = async () => {
            try {
                const authStatus = await getUserAuthStatus();
                const cartContents = await getCartContents();

                if (!authStatus || cartContents.length === 0) {
                    navigate('/cart'); // Redirect to cart if not authenticated or cart is empty
                } else {
                    setIsAuthenticated(authStatus);
                    setCart(cartContents);
                }
            } catch (error) {
                console.error('Error verifying user or cart:', error);
                navigate('/error'); // Redirect to error page on failure
            }
        };

        verifyUserAndCart();
    }, [navigate]);

    const handleNextStep = (data) => {
        setOrderDetails((prevDetails) => ({ ...prevDetails, ...data }));
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handlePlaceOrder = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api//orderRoutes/placeOrder', orderDetails);
            if (response.status === 200) {
                navigate('/order-success'); // Redirect to success page
            }
        } catch (error) {
            console.error('Error placing order:', error);
            navigate('/error'); // Redirect to error page on failure
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <StepOne onNext={handleNextStep} />;
            case 2:
                return <StepTwo onNext={handleNextStep} onBack={handlePreviousStep} />;
            case 3:
                return <StepThree onPlaceOrder={handlePlaceOrder} onBack={handlePreviousStep} />;
            default:
                return null;
        }
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            {isAuthenticated && cart.length > 0 ? renderStep() : <p>Loading...</p>}
        </div>
    );
};

export default Checkout;