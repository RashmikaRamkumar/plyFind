import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        // Fetch products and categories from API
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api//products');
                const data = await response.json();
                setProducts(data.products);
                setFilteredProducts(data.products);
                setCategories([...new Set(data.products.map(product => product.category))]);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        // Filter products by selected category
        if (selectedCategory) {
            setFilteredProducts(products.filter(product => product.category === selectedCategory));
        } else {
            setFilteredProducts(products);
        }
        setCurrentPage(1); // Reset to first page on filter change
    }, [selectedCategory, products]);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <ProductFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            <ProductList products={currentProducts} />
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-1 rounded ${
                            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Products;