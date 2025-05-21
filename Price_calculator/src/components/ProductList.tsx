import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  selectedProduct: Product | null;
  categoryFilter: string | null;
  subcategoryFilter: string | null;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onSelectProduct,
  selectedProduct,
  categoryFilter,
  subcategoryFilter,
}) => {
  const filteredProducts = products.filter((product) => {
    if (categoryFilter && product.category !== categoryFilter) {
      return false;
    }
    if (subcategoryFilter && product.subcategory !== subcategoryFilter) {
      return false;
    }
    return true;
  });
  
  if (filteredProducts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <h3 className="text-lg font-medium text-gray-800 mb-2">No products found</h3>
        <p className="text-gray-600">
          Try selecting a different category or subcategory.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelectProduct}
          isSelected={selectedProduct?.id === product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;