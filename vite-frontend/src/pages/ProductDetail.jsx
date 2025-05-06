import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/productSchema";
import { calculatePrice, addToCart } from "../../controllers/cartController";

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [dimensions, setDimensions] = useState({ height: 0, width: 0, depth: 0 });
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductById(productId);
            setProduct(data);
            setDimensions({ height: data.defaultHeight, width: data.defaultWidth, depth: data.defaultDepth });
            setPrice(calculatePrice(data.basePrice, data.defaultHeight * data.defaultWidth * data.defaultDepth, data.costPerUnitVolume));
        };

        fetchProduct();
    }, [productId]);

    const handleDimensionChange = (e) => {
        const { name, value } = e.target;
        const updatedDimensions = { ...dimensions, [name]: parseFloat(value) || 0 };
        setDimensions(updatedDimensions);

        if (product) {
            const volume = updatedDimensions.height * updatedDimensions.width * updatedDimensions.depth;
            setPrice(calculatePrice(product.basePrice, volume, product.costPerUnitVolume));
        }
    };

    const handleAddToCart = async () => {
        if (product) {
            await addToCart({
                productId: product.id,
                quantity,
                dimensions,
                price,
            });
            alert("Product added to cart!");
        }
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Base Price: ${product.basePrice.toFixed(2)}</p>
            <p>Cost Per Unit Volume: ${product.costPerUnitVolume.toFixed(2)}</p>

            <div className="dimensions">
                <h3>Customize Dimensions</h3>
                <label>
                    Height:
                    <input
                        type="number"
                        name="height"
                        value={dimensions.height}
                        onChange={handleDimensionChange}
                    />
                </label>
                <label>
                    Width:
                    <input
                        type="number"
                        name="width"
                        value={dimensions.width}
                        onChange={handleDimensionChange}
                    />
                </label>
                <label>
                    Depth:
                    <input
                        type="number"
                        name="depth"
                        value={dimensions.depth}
                        onChange={handleDimensionChange}
                    />
                </label>
            </div>

            <p>Calculated Price: ${price.toFixed(2)}</p>

            <div className="quantity-selector">
                <label>
                    Quantity:
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    />
                </label>
            </div>

            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;