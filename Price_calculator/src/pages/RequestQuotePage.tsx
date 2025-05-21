import React, { useState } from "react";
import { ArrowRight, Mail, Phone, Send } from "lucide-react";
import { Product } from "../types";
import { products } from "../data/products";

const RequestQuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    selectedProducts: [] as string[],
  });

  const [submitted, setSubmitted] = useState(false);

  const customQuoteProducts = products.filter((p) => p.isCustomQuote);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedValues = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }

    setFormData((prev) => ({
      ...prev,
      selectedProducts: selectedValues,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <a href="/" className="hover:text-amber-700">
          Home
        </a>
        <ArrowRight size={14} className="mx-2" />
        <span className="text-amber-800 font-medium">Request Quote</span>
      </div>

      <h1 className="text-3xl font-bold text-amber-900 mb-2">
        Request a Custom Quote
      </h1>
      <p className="text-gray-600 mb-8">
        Fill out the form below to request a personalized quote for your
        specific requirements.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={28} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-green-800 mb-2">
                Quote Request Sent!
              </h2>
              <p className="text-gray-600 mb-4">
                Thank you for your quote request. Our team will review your
                details and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="products"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Products (Hold Ctrl/Cmd to select multiple)
                </label>
                <select
                  id="products"
                  name="products"
                  multiple
                  size={5}
                  value={formData.selectedProducts}
                  onChange={handleProductSelect}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                >
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name} ({product.subcategory || product.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your project and specific requirements, including dimensions, quantities, and any special features needed."
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md flex items-center transition-colors"
                >
                  <Send size={18} className="mr-2" />
                  Submit Quote Request
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <h2 className="bg-amber-800 text-white px-4 py-3 font-semibold">
              Contact Information
            </h2>
            <div className="p-4 space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-amber-600 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 1234 5678</p>
                  <p className="text-gray-600">+91 9876 5432</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="text-amber-600 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">quotes@woodestimator.com</p>
                  <p className="text-gray-600">info@woodestimator.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <h2 className="bg-amber-800 text-white px-4 py-3 font-semibold">
              Custom Quote Products
            </h2>
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-4">
                These products require custom quotation due to their specialized
                nature or custom configurations:
              </p>
              <ul className="space-y-3">
                {customQuoteProducts.map((product) => (
                  <li key={product.id} className="flex items-start space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {product.subcategory || product.category}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuotePage;
