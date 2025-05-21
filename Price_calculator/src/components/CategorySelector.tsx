import React, { useState } from 'react';
import { Category } from '../types';
import { ChevronRight } from 'lucide-react';

interface CategorySelectorProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
  onSelectSubcategory: (categoryId: string, subcategory: string) => void;
  selectedCategory: string | null;
  selectedSubcategory: string | null;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  onSelectCategory,
  onSelectSubcategory,
  selectedCategory,
  selectedSubcategory,
}) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(selectedCategory);

  const handleCategoryClick = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
      onSelectCategory(categoryId);
    }
  };

  const handleSubcategoryClick = (categoryId: string, subcategory: string) => {
    onSelectSubcategory(categoryId, subcategory);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="bg-blue-800 text-white px-4 py-3 font-semibold">Material Categories</h2>
      <div className="divide-y divide-blue-100">
        {categories.map((category) => (
          <div key={category.id} className="overflow-hidden">
            <button
              className={`w-full px-4 py-3 text-left flex items-center justify-between font-medium ${
                selectedCategory === category.id ? 'bg-blue-50 text-blue-900' : 'text-gray-700 hover:bg-blue-50'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <span>{category.name}</span>
              <ChevronRight 
                className={`transform transition-transform duration-200 ${
                  expandedCategory === category.id ? 'rotate-90' : ''
                }`} 
                size={18} 
              />
            </button>
            
            {expandedCategory === category.id && category.subcategories && (
              <div className="bg-blue-50/50 pl-6 pr-4 py-2 animate-fadeIn">
                <ul className="space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory}>
                      <button
                        className={`w-full px-2 py-1.5 text-left text-sm rounded ${
                          selectedSubcategory === subcategory
                            ? 'bg-blue-100 text-blue-900 font-medium'
                            : 'text-gray-600 hover:bg-blue-100'
                        }`}
                        onClick={() => handleSubcategoryClick(category.id, subcategory)}
                      >
                        {subcategory}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;