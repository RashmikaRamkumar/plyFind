import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { updateCart, removeFromCart } from '../../controllers/cartController';
import { calculatePrice } from '../../utils/priceCalculator';

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [dimensions, setDimensions] = useState(item.dimensions);

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity < 1) return;
        setQuantity(newQuantity);
        updateCart(item.id, { quantity: newQuantity, dimensions });
    };

    const handleDimensionsChange = (newDimensions) => {
        setDimensions(newDimensions);
        updateCart(item.id, { quantity, dimensions: newDimensions });
    };

    const handleRemove = () => {
        removeFromCart(item.id);
    };

    const price = calculatePrice(item.basePrice, quantity, dimensions);

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h3>{item.name}</h3>
                <div className="cart-item-dimensions">
                    <label>
                        Dimensions:
                        <input
                            type="text"
                            value={dimensions}
                            onChange={(e) => handleDimensionsChange(e.target.value)}
                            placeholder="e.g., 10x20x30"
                        />
                    </label>
                </div>
                <div className="cart-item-quantity">
                    <label>
                        Quantity:
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => handleQuantityChange(Number(e.target.value))}
                            min="1"
                        />
                    </label>
                </div>
                <div className="cart-item-price">
                    <strong>Price: ${price.toFixed(2)}</strong>
                </div>
                <button onClick={handleRemove} className="cart-item-remove">
                    Remove
                </button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        basePrice: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        dimensions: PropTypes.string.isRequired,
    }).isRequired,
};

export default CartItem;