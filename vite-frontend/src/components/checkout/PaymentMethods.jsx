import React, { useState } from 'react';

const PaymentMethods = ({ onPaymentMethodSelect }) => {
    const [paymentType, setPaymentType] = useState('');
    const [upiId, setUpiId] = useState('');
    const [error, setError] = useState('');

    const handlePaymentChange = (event) => {
        const selectedPayment = event.target.value;
        setPaymentType(selectedPayment);
        setError('');
        if (selectedPayment !== 'UPI') {
            setUpiId('');
        }
        onPaymentMethodSelect({ paymentType: selectedPayment, upiId: '' });
    };

    const handleUpiIdChange = (event) => {
        const upiValue = event.target.value;
        setUpiId(upiValue);
        if (upiValue.trim() === '') {
            setError('UPI ID is required.');
        } else {
            setError('');
        }
        onPaymentMethodSelect({ paymentType, upiId: upiValue });
    };

    const validateUpiId = () => {
        if (paymentType === 'UPI' && upiId.trim() === '') {
            setError('UPI ID is required.');
        }
    };

    return (
        <div>
            <h3>Select Payment Method</h3>
            <div>
                <label>
                    <input
                        type="radio"
                        value="COD"
                        checked={paymentType === 'COD'}
                        onChange={handlePaymentChange}
                    />
                    Cash on Delivery (COD)
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="UPI"
                        checked={paymentType === 'UPI'}
                        onChange={handlePaymentChange}
                    />
                    UPI
                </label>
            </div>
            {paymentType === 'UPI' && (
                <div>
                    <label>
                        Enter UPI ID:
                        <input
                            type="text"
                            value={upiId}
                            onChange={handleUpiIdChange}
                            onBlur={validateUpiId}
                        />
                    </label>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            )}
        </div>
    );
};

export default PaymentMethods;