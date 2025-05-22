import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CategorySelector from "../components/CategorySelector";
import ProductList from "../components/ProductList";
import DimensionInput from "../components/DimensionInput";
import PriceEstimate from "../components/PriceEstimate";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { Dimensions, Product } from "../types";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EstimatorPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category") || null
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    searchParams.get("subcategory") || null
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [dimensions, setDimensions] = useState<Dimensions>({
    length: 96,
    width: 48,
    thickness: 18,
    unit: "inch",
  });

  const [quantity, setQuantity] = useState<number>(1);

  // Update URL when selections change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set("category", selectedCategory);
    if (selectedSubcategory) params.set("subcategory", selectedSubcategory);
    setSearchParams(params);
  }, [selectedCategory, selectedSubcategory, setSearchParams]);

  // Try to select a product when subcategory changes
  useEffect(() => {
    if (selectedSubcategory) {
      const matchingProducts = products.filter(
        (p) => p.subcategory === selectedSubcategory
      );
      if (matchingProducts.length > 0 && !selectedProduct) {
        setSelectedProduct(matchingProducts[0]);
      }
    }
  }, [selectedSubcategory, selectedProduct]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    setSelectedProduct(null);
  };

  const handleSubcategorySelect = (categoryId: string, subcategory: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategory);

    // Reset selected product when changing subcategory
    setSelectedProduct(null);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);

    // If product has available thicknesses, set the first one as default
    if (
      product.availableThicknesses &&
      product.availableThicknesses.length > 0
    ) {
      setDimensions((prev) => ({
        ...prev,
        thickness: product.availableThicknesses![0],
      }));
    }
  };

  const handleDimensionsChange = (newDimensions: Dimensions) => {
    setDimensions(newDimensions);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleBackClick = () => {
    window.location.href = "https://ply-find.vercel.app";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Main Site
        </button>
        <h1 className="text-3xl font-bold text-amber-900">
          Material Price Estimator
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <CategorySelector
            categories={categories}
            onSelectCategory={handleCategorySelect}
            onSelectSubcategory={handleSubcategorySelect}
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
          />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-amber-700">
              Home
            </a>
            <ArrowRight size={14} className="mx-2" />
            <span className="text-amber-800 font-medium">Estimator</span>
            {selectedCategory && (
              <>
                <ArrowRight size={14} className="mx-2" />
                <span className="text-amber-800 font-medium">
                  {categories.find((c) => c.id === selectedCategory)?.name ||
                    selectedCategory}
                </span>
              </>
            )}
            {selectedSubcategory && (
              <>
                <ArrowRight size={14} className="mx-2" />
                <span className="text-amber-800 font-medium">
                  {selectedSubcategory}
                </span>
              </>
            )}
          </div>

          {/* Category Selection Hint */}
          {!selectedCategory && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Select a Material Category
              </h3>
              <p className="text-gray-600 mb-4">
                Choose a category from the sidebar to view available products
                and get price estimates.
              </p>
              <div className="flex justify-center">
                <ArrowLeft
                  size={24}
                  className="text-amber-500 animate-bounce-horizontal hidden lg:block"
                />
              </div>
            </div>
          )}

          {/* Products and Dimensions/Price Section */}
          {selectedCategory && (
            <div>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                {selectedSubcategory ||
                  categories.find((c) => c.id === selectedCategory)?.name}
              </h2>

              <ProductList
                products={products}
                onSelectProduct={handleProductSelect}
                selectedProduct={selectedProduct}
                categoryFilter={selectedCategory}
                subcategoryFilter={selectedSubcategory}
              />

              {selectedProduct && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <DimensionInput
                    dimensions={dimensions}
                    onDimensionsChange={handleDimensionsChange}
                    availableThicknesses={selectedProduct.availableThicknesses}
                    calculationType={selectedProduct.calculationType}
                  />
                  <PriceEstimate
                    product={selectedProduct}
                    dimensions={dimensions}
                    quantity={quantity}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstimatorPage;
