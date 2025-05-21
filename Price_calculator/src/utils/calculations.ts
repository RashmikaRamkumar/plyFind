import { Dimensions, Product } from '../types';

// Convert all dimensions to mm for consistent calculations
export const convertToMM = (dimensions: Dimensions): Dimensions => {
  const { length, width, thickness, unit } = dimensions;
  
  let convertedLength = length;
  let convertedWidth = width;
  let convertedThickness = thickness;
  
  switch (unit) {
    case 'cm':
      convertedLength *= 10;
      convertedWidth *= 10;
      convertedThickness *= 10;
      break;
    case 'inch':
      convertedLength *= 25.4;
      convertedWidth *= 25.4;
      convertedThickness *= 25.4;
      break;
    case 'ft':
      convertedLength *= 304.8;
      convertedWidth *= 304.8;
      convertedThickness *= 304.8;
      break;
  }
  
  return {
    length: convertedLength,
    width: convertedWidth,
    thickness: convertedThickness,
    unit: 'mm'
  };
};

// Convert mm to square feet
export const convertToSquareFeet = (lengthMM: number, widthMM: number): number => {
  const lengthFeet = lengthMM / 304.8;
  const widthFeet = widthMM / 304.8;
  return lengthFeet * widthFeet;
};

// Convert mm to cubic feet
export const convertToCubicFeet = (lengthMM: number, widthMM: number, thicknessMM: number): number => {
  const lengthFeet = lengthMM / 304.8;
  const widthFeet = widthMM / 304.8;
  const thicknessFeet = thicknessMM / 304.8;
  return lengthFeet * widthFeet * thicknessFeet;
};

// Convert mm to linear feet
export const convertToLinearFeet = (lengthMM: number): number => {
  return lengthMM / 304.8;
};

// Calculate price based on product type and dimensions
export const calculatePrice = (
  product: Product, 
  dimensions: Dimensions,
  quantity: number = 1
): number => {
  const { calculationType, basePrice } = product;
  const mmDimensions = convertToMM(dimensions);
  const { length, width, thickness } = mmDimensions;
  
  let price = 0;
  
  switch (calculationType) {
    case 'area':
      const sqFt = convertToSquareFeet(length, width);
      
      // Adjust price based on thickness if available
      let thicknessMultiplier = 1;
      if (product.availableThicknesses) {
        const referenceThickness = 18; // Usually 18mm is the reference thickness for plywood
        thicknessMultiplier = thickness / referenceThickness;
      }
      
      price = basePrice * sqFt * thicknessMultiplier;
      break;
      
    case 'volume':
      const cubicFt = convertToCubicFeet(length, width, thickness);
      price = basePrice * cubicFt;
      break;
      
    case 'fixed':
      price = basePrice;
      break;
      
    case 'custom':
      // For custom items, we just return the base price as an estimate
      // The actual price will require a quote
      price = basePrice;
      break;
  }
  
  return price * quantity;
};

// Format price with commas and currency symbol
export const formatPrice = (price: number): string => {
  return `₹${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
};

// Format dimensions with units
export const formatDimensions = (dimensions: Dimensions): string => {
  const { length, width, thickness, unit } = dimensions;
  return `${length} × ${width} × ${thickness} ${unit}`;
};