import React from 'react';
import PropTypes from 'prop-types';

const OrderSummary = ({ order }) => {
    const calculateVolume = (dimensions) => {
        const { length, width, height } = dimensions;
        return length * width * height;
    };

    const calculatePrice = (dimensions, costPerUnitVolume) => {
        const volume = calculateVolume(dimensions);
        return volume * costPerUnitVolume;
    };

    const totalOrderPrice = order.products.reduce((total, product) => {
        return total + calculatePrice(product.dimensions, product.costPerUnitVolume) * product.quantity;
    }, 0);

    return (
        <div>
            <h2>Order Summary</h2>
            <ul>
                {order.products.map((product, index) => {
                    const productPrice = calculatePrice(product.dimensions, product.costPerUnitVolume);
                    return (
                        <li key={index}>
                            <h3>{product.name}</h3>
                            <p>Dimensions: {product.dimensions.length} x {product.dimensions.width} x {product.dimensions.height}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>Price per unit: ${productPrice.toFixed(2)}</p>
                            <p>Total: ${(productPrice * product.quantity).toFixed(2)}</p>
                        </li>
                    );
                })}
            </ul>
            <h3>Total Order Price: ${totalOrderPrice.toFixed(2)}</h3>
        </div>
    );
};

OrderSummary.propTypes = {
    order: PropTypes.shape({
        products: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                dimensions: PropTypes.shape({
                    length: PropTypes.number.isRequired,
                    width: PropTypes.number.isRequired,
                    height: PropTypes.number.isRequired,
                }).isRequired,
                quantity: PropTypes.number.isRequired,
                costPerUnitVolume: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default OrderSummary;