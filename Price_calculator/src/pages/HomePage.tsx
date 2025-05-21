import React from 'react';
import { categories } from '../data/categories';
import { ArrowRight, Calculator, FileText, Phone, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20 md:py-32"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4406628/pexels-photo-4406628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundPosition: '50% 30%'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Accurate Price Estimates for Your Building Materials
            </h1>
            <p className="text-lg md:text-xl mb-8 text-amber-100">
              Calculate costs for plywood, glass, laminates, and more with our easy-to-use estimator tool.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/estimator"
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-md flex items-center justify-center transition-colors"
              >
                <Calculator size={20} className="mr-2" />
                Try Estimator
              </Link>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium px-6 py-3 rounded-md flex items-center justify-center transition-colors">
                <Phone size={20} className="mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Why Choose Our Estimator?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get accurate pricing information for all your construction and woodworking material needs with our easy-to-use calculator.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Calculator size={28} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 text-center mb-2">Accurate Estimates</h3>
              <p className="text-gray-600 text-center">
                Get precise pricing based on dimensions, material type, and quantity for all your project needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <ThumbsUp size={28} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 text-center mb-2">Quality Materials</h3>
              <p className="text-gray-600 text-center">
                We only provide estimates for premium quality materials that meet industry standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FileText size={28} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 text-center mb-2">Custom Quotes</h3>
              <p className="text-gray-600 text-center">
                Need something specific? Request a custom quote for specialized materials and dimensions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Explore Material Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our wide range of building materials and get instant price estimates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.id}
                to={`/estimator?category=${category.id}`}
                className="group relative overflow-hidden rounded-lg shadow-md h-64"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold mb-1">{category.name}</h3>
                  <p className="text-amber-100 text-sm mb-3">{category.description}</p>
                  <div className="flex items-center text-amber-300 group-hover:text-amber-200 text-sm font-medium transition-colors">
                    <span>View Products</span>
                    <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/estimator"
              className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
            >
              <span>View All Categories</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Help with Your Project?</h2>
            <p className="text-amber-100 text-lg mb-8">
              Our team of experts is ready to assist you with material selection, custom quotes, and professional advice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-amber-900 hover:bg-amber-100 font-medium px-6 py-3 rounded-md flex items-center justify-center sm:w-auto transition-colors">
                <Phone size={20} className="mr-2" />
                Contact Us
              </button>
              <Link
                to="/estimator"
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-md flex items-center justify-center sm:w-auto transition-colors"
              >
                <Calculator size={20} className="mr-2" />
                Try Estimator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;