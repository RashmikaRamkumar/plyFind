import React, { useEffect, useState } from "react";

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await fetch("/api/products");
                const data = await response.json();
                setFeaturedProducts(data);
            } catch (error) {
                console.error("Error fetching featured products:", error);
            }
        };

        fetchFeaturedProducts();
    }, []);

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section className="bg-gray-100 text-center py-16">
                <h1 className="text-4xl font-bold mb-4">Welcome to PlyFind</h1>
                <p className="text-lg text-gray-600">Your one-stop solution for premium Plywood and Glass products.</p>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 shadow-md">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p className="text-gray-600 mt-2">{product.description}</p>
                            <p className="text-lg font-bold mt-4">${product.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories Section */}
            <section className="bg-gray-50 py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-center p-8 border rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Plywood</h3>
                        <p className="text-gray-600">Explore our wide range of high-quality plywood products.</p>
                    </div>
                    <div className="text-center p-8 border rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Glass</h3>
                        <p className="text-gray-600">Discover premium glass solutions for your projects.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 border rounded-lg shadow-md">
                        <p className="text-gray-600 italic">"Amazing quality and great customer service!"</p>
                        <p className="text-right mt-4 font-semibold">- John Doe</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-md">
                        <p className="text-gray-600 italic">"Highly recommend PlyFind for all your needs."</p>
                        <p className="text-right mt-4 font-semibold">- Jane Smith</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-md">
                        <p className="text-gray-600 italic">"The best plywood and glass products in the market!"</p>
                        <p className="text-right mt-4 font-semibold">- Michael Lee</p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-blue-600 text-white text-center py-16">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-8">Contact us today to learn more about our products and services.</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                    Contact Us
                </button>
            </section>
        </div>
    );
};

export default Home;