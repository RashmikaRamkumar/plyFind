import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = ({ userId, cart, totalPrice }) => {
    const [step, setStep] = useState(1);
    const [address, setAddress] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const navigate = useNavigate();

    const handleNextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const handlePreviousStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmitOrder = async () => {
        try {
            const orderData = {
                userId,
                products: cart,
                totalPrice,
                paymentType,
                address,
            };

            // Post order to /api/order
            await axios.post("/api/order", orderData);

            // Clear the user's cart
            await axios.delete(`/api/cart/${userId}/clear`);

            // Redirect to order confirmation
            navigate("/order-confirmation");
        } catch (error) {
            console.error("Error submitting order:", error);
        }
    };

    return (
        <div className="checkout">
            {step === 1 && (
                <div className="step">
                    <h2>Step 1: Address Collection</h2>
                    <textarea
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <button onClick={handleNextStep} disabled={!address}>
                        Next
                    </button>
                </div>
            )}

            {step === 2 && (
                <div className="step">
                    <h2>Step 2: Order Review</h2>
                    <ul>
                        {cart.map((product, index) => (
                            <li key={index}>
                                {product.name} - ${product.price} x {product.quantity}
                            </li>
                        ))}
                    </ul>
                    <p>Total Price: ${totalPrice}</p>
                    <button onClick={handlePreviousStep}>Back</button>
                    <button onClick={handleNextStep}>Next</button>
                </div>
            )}

            {step === 3 && (
                <div className="step">
                    <h2>Step 3: Payment Method</h2>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="COD"
                                checked={paymentType === "COD"}
                                onChange={(e) => setPaymentType(e.target.value)}
                            />
                            Cash on Delivery (COD)
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="UPI"
                                checked={paymentType === "UPI"}
                                onChange={(e) => setPaymentType(e.target.value)}
                            />
                            UPI
                        </label>
                    </div>
                    <button onClick={handlePreviousStep}>Back</button>
                    <button onClick={handleSubmitOrder} disabled={!paymentType}>
                        Submit Order
                    </button>
                </div>
            )}
        </div>
    );
};

export default Checkout;