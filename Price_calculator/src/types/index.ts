export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  basePrice: number;
  unit: string;
  calculationType: 'area' | 'volume' | 'fixed' | 'custom';
  image: string;
  availableThicknesses?: number[];
  notes?: string;
  isCustomQuote?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories?: string[];
}

export interface Dimensions {
  length: number;
  width: number;
  thickness: number;
  unit: 'mm' | 'cm' | 'inch' | 'ft';
}

export interface EstimationResult {
  product: Product;
  dimensions: Dimensions;
  quantity: number;
  totalPrice: number;
  date: Date;
}