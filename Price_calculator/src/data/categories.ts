import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'plywood',
    name: 'Plywood',
    description: 'High-quality plywood sheets for various applications',
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subcategories: ['BWR Plywood', 'MR Grade Plywood', 'Marine Plywood']
  },
  {
    id: 'boards',
    name: 'Boards',
    description: 'Versatile board options for furniture and interiors',
    image: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subcategories: ['MDF Boards', 'Particle Boards']
  },
  {
    id: 'glass',
    name: 'Glass',
    description: 'Premium glass solutions for windows, doors and interiors',
    image: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subcategories: ['Toughened Glass', 'Frosted Glass', 'Decorative Glass', 'Clear Float Glass', 'Mirror Glass']
  },
  {
    id: 'laminates',
    name: 'Laminates & Finishes',
    description: 'Beautiful laminates, veneers and edge bands for the perfect finish',
    image: 'https://images.pexels.com/photos/6508371/pexels-photo-6508371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subcategories: ['Laminates', 'Veneers', 'Edge Bands']
  },
  {
    id: 'hardware',
    name: 'Hardware & Fittings',
    description: 'Quality hardware solutions for all your furniture needs',
    image: 'https://images.pexels.com/photos/5691621/pexels-photo-5691621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subcategories: ['Door Fittings', 'Cabinet Hardware', 'Locks', 'Kitchen Fittings']
  },
  {
    id: 'adhesives',
    name: 'Adhesives & Sealants',
    description: 'High-strength adhesives for woodworking applications',
    image: 'https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subcategories: ['Wood Glue', 'Silicone', 'Construction Adhesives']
  }
];