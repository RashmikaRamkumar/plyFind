import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, onViewDetails }) => {
    const calculatePrice = () => {
        const { costPerUnitVolume, dimensions } = product;
        const volume = dimensions.length * dimensions.width * dimensions.height;
        return (costPerUnitVolume * volume).toFixed(2);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
                className="w-full h-48 object-cover"
                src={product.images[0]}
                alt={product.name}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">{product.category}</p>
                <p className="text-gray-900 font-semibold mt-2">${calculatePrice()}</p>
            </div>
            <div className="px-6 py-4">
                <button
                    onClick={onViewDetails}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        costPerUnitVolume: PropTypes.number.isRequired,
        dimensions: PropTypes.shape({
            length: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
    onViewDetails: PropTypes.func.isRequired,
};

export default ProductCard;