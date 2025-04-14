
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'plywood', name: 'Plywoods & Boards' },
    { id: 'glass', name: 'Glass Types' },
    { id: 'other', name: 'Other Products' }
  ];

  const products = [
    {
      id: 1,
      name: 'BWR Plywood',
      category: 'plywood',
      description: 'Boiling Water Resistant plywood ideal for kitchens, bathrooms, and areas exposed to moisture.',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'MR Grade Plywood',
      category: 'plywood',
      description: 'Moisture Resistant plywood suitable for general interior applications.',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Marine Plywood',
      category: 'plywood',
      description: 'High-grade waterproof plywood for extreme moisture conditions and exterior applications.',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'MDF Boards',
      category: 'plywood',
      description: 'Medium Density Fiberboard with smooth surface, perfect for furniture and cabinetry.',
      image: '/placeholder.svg'
    },
    {
      id: 5,
      name: 'Particle Boards',
      category: 'plywood',
      description: 'Engineered wood product manufactured from wood chips, perfect for cost-effective solutions.',
      image: '/placeholder.svg'
    },
    {
      id: 6,
      name: 'Toughened Glass',
      category: 'glass',
      description: 'Heat-treated safety glass with increased strength and thermal resistance.',
      image: '/placeholder.svg'
    },
    {
      id: 7,
      name: 'Frosted Glass',
      category: 'glass',
      description: 'Translucent glass with a matte appearance, providing privacy while allowing light transmission.',
      image: '/placeholder.svg'
    },
    {
      id: 8,
      name: 'Decorative Glass',
      category: 'glass',
      description: 'Patterned and textured glass options that add aesthetic appeal to doors, windows, and partitions.',
      image: '/placeholder.svg'
    },
    {
      id: 9,
      name: 'Clear Float Glass',
      category: 'glass',
      description: 'Standard transparent glass for windows, shelves, and table tops.',
      image: '/placeholder.svg'
    },
    {
      id: 10,
      name: 'Mirror Glass',
      category: 'glass',
      description: 'High-quality reflective glass in various thicknesses for decorative and functional use.',
      image: '/placeholder.svg'
    },
    {
      id: 11,
      name: 'Laminates',
      category: 'other',
      description: 'Decorative surface materials in various designs and textures for furniture finishing.',
      image: '/placeholder.svg'
    },
    {
      id: 12,
      name: 'Veneers',
      category: 'other',
      description: 'Thin slices of natural wood for premium furniture and interior surfaces.',
      image: '/placeholder.svg'
    },
    {
      id: 13,
      name: 'Edge Bands',
      category: 'other',
      description: 'Finishing material for covering exposed edges of plywood and boards.',
      image: '/placeholder.svg'
    },
    {
      id: 14,
      name: 'Hardware Accessories',
      category: 'other',
      description: 'Various fittings, handles, and functional accessories for furniture and cabinets.',
      image: '/placeholder.svg'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wood-light to-glass-light py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">Our Products</h1>
            <p className="text-lg">Explore our comprehensive range of quality materials for your projects.</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pt-10 pb-6 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-wood text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="card-custom group overflow-hidden">
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Link to="/enquiry" className="text-wood-dark font-medium hover:text-wood transition-colors inline-flex items-center">
                  Request Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Descriptions */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Product Categories</h2>
          
          <div className="mb-12">
            <h3 className="heading-md mb-4">Plywoods & Boards</h3>
            <p className="text-lg mb-6">
              Our comprehensive range of plywood and boards caters to various applications from furniture to construction. 
              Each type is sourced from reputable manufacturers and undergoes quality checks to ensure durability and performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">BWR Plywood</h4>
                <p className="text-sm">Ideal for humid conditions</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">MR Grade Plywood</h4>
                <p className="text-sm">For general interior use</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Marine Plywood</h4>
                <p className="text-sm">Maximum water resistance</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">MDF Boards</h4>
                <p className="text-sm">Smooth finish for detailed work</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Particle Boards</h4>
                <p className="text-sm">Cost-effective solutions</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="heading-md mb-4">Glass Types</h3>
            <p className="text-lg mb-6">
              Our glass products combine safety, functionality, and aesthetics. We offer custom cutting services and 
              can advise on the most suitable glass type for your specific application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Toughened Glass</h4>
                <p className="text-sm">Safety glass for doors and partitions</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Frosted Glass</h4>
                <p className="text-sm">Privacy with light transmission</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Decorative Glass</h4>
                <p className="text-sm">Aesthetic appeal for interiors</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Clear Float Glass</h4>
                <p className="text-sm">Standard transparent glass</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Mirror Glass</h4>
                <p className="text-sm">Reflective surfaces for decor</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-md mb-4">Other Products</h3>
            <p className="text-lg mb-6">
              Complete your projects with our selection of complementary materials and accessories, 
              ensuring a cohesive and finished look for all your interior work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Laminates</h4>
                <p className="text-sm">Surface finishing in multiple designs</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Veneers</h4>
                <p className="text-sm">Natural wood finishing</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Edge Bands</h4>
                <p className="text-sm">Edge protection and finishing</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold">Hardware Accessories</h4>
                <p className="text-sm">Functional components for furniture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-wood-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">Need Customized Solutions?</h2>
            <p className="text-lg mb-8">
              We offer custom cutting, sizing, and finishing services to meet your specific project requirements. 
              Contact us today to discuss your needs.
            </p>
            <Link to="/enquiry" className="btn-primary bg-white text-wood-dark hover:bg-gray-100">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
