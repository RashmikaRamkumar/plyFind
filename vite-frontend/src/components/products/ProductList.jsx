import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filters, setFilters] = useState({});

    const fetchProducts = async () => {
        try {
            const params = {
                category,
                sort,
                page: currentPage,
                ...filters,
            };
            const response = await axios.get('http://localhost:5000/api//products', { params });
            setProducts(response.data.products);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [category, sort, currentPage, filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1); // Reset to first page when filters change
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <ProductFilter onFilterChange={handleFilterChange} />
            <div>
                <label htmlFor="sort">Sort By:</label>
                <select id="sort" value={sort} onChange={handleSortChange}>
                    <option value="">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                </select>
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductList;