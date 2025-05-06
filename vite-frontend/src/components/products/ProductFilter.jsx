import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductFilter = () => {
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const navigate = useNavigate();

    const handleFilterChange = () => {
        const queryParams = new URLSearchParams();

        if (category) queryParams.append('category', category);
        if (priceRange) queryParams.append('priceRange', priceRange);

        navigate(`/products?${queryParams.toString()}`);
    };

    return (
        <div className="filter-sidebar">
            <h3>Filter Products</h3>
            <div className="filter-group">
                <label>Category</label>
                <select
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">All</option>
                    <option value="glass">Glass</option>
                    <option value="plywood">Plywood</option>
                </select>
            </div>
            <div className="filter-group">
                <label>Price Range</label>
                <select
                    value={priceRange}
                    onChange={(e) => {
                        setPriceRange(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">All</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="51-100">$51 - $100</option>
                    <option value="101-200">$101 - $200</option>
                </select>
            </div>
        </div>
    );
};

export default ProductFilter;