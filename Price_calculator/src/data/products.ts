import { Product } from '../types';

export const products: Product[] = [
  // Plywood
  {
    id: 'bwr-plywood',
    name: 'BWR Plywood',
    category: 'plywood',
    subcategory: 'BWR Plywood',
    description: 'Boiling Water Resistant plywood suitable for kitchen and bathroom applications.',
    basePrice: 85, // per sq ft for 18mm thickness
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [6, 9, 12, 15, 18, 25],
    notes: 'Prices vary based on thickness. 18mm is the reference thickness.'
  },
  {
    id: 'mr-plywood',
    name: 'MR Grade Plywood',
    category: 'plywood',
    subcategory: 'MR Grade Plywood',
    description: 'Moisture Resistant plywood suitable for indoor furniture in dry areas.',
    basePrice: 65, // per sq ft for 18mm thickness
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [6, 9, 12, 15, 18, 25],
    notes: 'Prices vary based on thickness. 18mm is the reference thickness.'
  },
  {
    id: 'marine-plywood',
    name: 'Marine Plywood',
    category: 'plywood',
    subcategory: 'Marine Plywood',
    description: 'Highly water-resistant plywood for marine and outdoor applications.',
    basePrice: 120, // per sq ft for 18mm thickness
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [9, 12, 18, 25],
    notes: 'Premium quality with excellent water resistance properties.'
  },
  
  // Boards
  {
    id: 'mdf-board',
    name: 'MDF Board',
    category: 'boards',
    subcategory: 'MDF Boards',
    description: 'Medium Density Fiberboard for furniture, cabinets, and decorative applications.',
    basePrice: 55, // per sq ft for 18mm thickness
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [6, 8, 12, 18, 25],
    notes: 'Smooth finish, ideal for lamination and painting.'
  },
  {
    id: 'particle-board',
    name: 'Particle Board',
    category: 'boards',
    subcategory: 'Particle Boards',
    description: 'Cost-effective engineered wood product for furniture and interior applications.',
    basePrice: 40, // per sq ft for 18mm thickness
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [9, 12, 18, 25],
    notes: 'Economic choice for interior applications in dry areas.'
  },
  
  // Glass
  {
    id: 'toughened-glass',
    name: 'Toughened Glass',
    category: 'glass',
    subcategory: 'Toughened Glass',
    description: 'High-strength safety glass that is heat-treated to increase durability.',
    basePrice: 110, // per sq ft for 8mm thickness
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [4, 5, 6, 8, 10, 12],
    notes: '4-5 times stronger than regular glass. Breaks into small, relatively harmless pieces.'
  },
  {
    id: 'frosted-glass',
    name: 'Frosted Glass',
    category: 'glass',
    subcategory: 'Frosted Glass',
    description: 'Translucent glass with a matte finish that provides privacy while allowing light.',
    basePrice: 120, // per sq ft for 8mm thickness
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/6508037/pexels-photo-6508037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [4, 5, 6, 8, 10],
    notes: 'Available in various patterns and degrees of opacity.'
  },
  {
    id: 'decorative-glass',
    name: 'Decorative Glass',
    category: 'glass',
    subcategory: 'Decorative Glass',
    description: 'Patterned or textured glass for aesthetic appeal and privacy.',
    basePrice: 150, // per sq ft for 8mm thickness
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/6045221/pexels-photo-6045221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [4, 5, 6, 8],
    notes: 'Custom patterns available upon request.'
  },
  {
    id: 'clear-float-glass',
    name: 'Clear Float Glass',
    category: 'glass',
    subcategory: 'Clear Float Glass',
    description: 'Standard transparent glass for windows, doors, and general applications.',
    basePrice: 70, // per sq ft for 6mm thickness
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [3, 4, 5, 6, 8, 10, 12],
    notes: 'Available in various thickness options for different applications.'
  },
  {
    id: 'mirror-glass',
    name: 'Mirror Glass',
    category: 'glass',
    subcategory: 'Mirror Glass',
    description: 'High-quality reflective glass for residential and commercial applications.',
    basePrice: 90, // per sq ft for 5mm thickness
    unit: 'sq.ft',
    calculationType: 'custom',
    image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [3, 4, 5, 6],
    notes: 'Available with beveled edges and various tints.',
    isCustomQuote: true
  },
  
  // Laminates & Finishes
  {
    id: 'laminates',
    name: 'Decorative Laminates',
    category: 'laminates',
    subcategory: 'Laminates',
    description: 'Durable and decorative surface material available in various designs and colors.',
    basePrice: 50, // per sq ft for standard thickness
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/6508371/pexels-photo-6508371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [0.8, 1],
    notes: 'Available in matte, glossy, textured, and wooden finishes.'
  },
  {
    id: 'veneers',
    name: 'Wood Veneers',
    category: 'laminates',
    subcategory: 'Veneers',
    description: 'Thin slices of natural wood for a premium appearance on furniture and interiors.',
    basePrice: 95, // per sq ft
    unit: 'sq.ft',
    calculationType: 'area',
    image: 'https://images.pexels.com/photos/5824497/pexels-photo-5824497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [0.5, 0.6],
    notes: 'Natural wood veneer available in various species and grain patterns.'
  },
  {
    id: 'edge-bands',
    name: 'Edge Bands',
    category: 'laminates',
    subcategory: 'Edge Bands',
    description: 'Finishing material for covering the exposed edges of panel materials.',
    basePrice: 15, // per linear ft for standard width
    unit: 'linear ft',
    calculationType: 'fixed',
    image: 'https://images.pexels.com/photos/4503817/pexels-photo-4503817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    availableThicknesses: [0.4, 0.8, 2],
    notes: 'Available in various widths and designs to match laminates.'
  },
  
  // Hardware items - These would typically be fixed price or custom quote items
  {
    id: 'door-locks',
    name: 'Door Locks',
    category: 'hardware',
    subcategory: 'Door Fittings',
    description: 'High-quality door locks for residential and commercial use.',
    basePrice: 750, // per piece starting price
    unit: 'piece',
    calculationType: 'fixed',
    image: 'https://images.pexels.com/photos/5691621/pexels-photo-5691621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    notes: 'Available in various designs, finishes, and security levels.'
  },
  {
    id: 'cabinet-handles',
    name: 'Cabinet Handles',
    category: 'hardware',
    subcategory: 'Cabinet Hardware',
    description: 'Decorative and functional handles for cabinets and drawers.',
    basePrice: 150, // per piece starting price
    unit: 'piece',
    calculationType: 'fixed',
    image: 'https://images.pexels.com/photos/5825371/pexels-photo-5825371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    notes: 'Available in various styles, sizes, and finishes.'
  },
  {
    id: 'kitchen-baskets',
    name: 'Kitchen Baskets',
    category: 'hardware',
    subcategory: 'Kitchen Fittings',
    description: 'Storage solutions for modern kitchen organization.',
    basePrice: 1200, // per piece starting price
    unit: 'piece',
    calculationType: 'custom',
    image: 'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    notes: 'Custom sizing and configurations available.',
    isCustomQuote: true
  },
  
  // Adhesives
  {
    id: 'wood-glue',
    name: 'Wood Adhesive',
    category: 'adhesives',
    subcategory: 'Wood Glue',
    description: 'High-strength adhesive specifically formulated for woodworking applications.',
    basePrice: 250, // per kg
    unit: 'kg',
    calculationType: 'fixed',
    image: 'https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    notes: 'Available in various package sizes.'
  }
];