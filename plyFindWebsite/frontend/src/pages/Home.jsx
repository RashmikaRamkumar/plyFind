
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wood-light to-glass-light py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="heading-xl mb-4">
                Welcome to Rakesh Glass and Plywood
              </h1>
              <h2 className="text-2xl text-wood-dark mb-6">
                Quality You Can See and Feel
              </h2>
              <p className="text-lg mb-8">
                Located in Nandhini Complex, Kovai Road, Kangeyam — proudly serving builders,
                carpenters, and interior professionals in the region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary text-center">
                  Browse Our Products
                </Link>
                <Link to="/enquiry" className="btn-outline text-center">
                  Send Enquiry
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/about/home.png" 
                alt="Rakesh Glass and Plywood store" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-8">Our Commitment to Quality</h2>
            <p className="text-lg mb-6">
              At Rakesh Glass and Plywood, we focus on delivering premium quality materials at the most competitive prices. 
              Our commitment is to reliability, honesty, and long-lasting customer relationships.
            </p>
            <div className="border-b border-wood w-24 mx-auto my-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="card-custom text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-wood rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                <p>We source only the finest quality materials for our customers, ensuring durability and aesthetic appeal.</p>
              </div>
              <div className="card-custom text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-wood rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p>We offer the best price-quality ratio in the region, making quality materials accessible to all.</p>
              </div>
              <div className="card-custom text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-wood rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                <p>Our dedicated team ensures personalized service and guidance for every customer's unique needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-custom overflow-hidden group">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src="images\products\BWR.jpg" 
                  alt="BWR Plywood" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">BWR Plywood</h3>
              <p className="text-muted-foreground mb-4">Premium boiling water resistant plywood for all your interior needs.</p>
              <Link to="/products" className="text-wood-dark font-medium hover:text-wood transition-colors inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="card-custom overflow-hidden group">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src="/images/products/ToughenedGlass.png" 
                  alt="Toughened Glass" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Toughened Glass</h3>
              <p className="text-muted-foreground mb-4">High-strength, safety glass perfect for doors, windows, and partitions.</p>
              <Link to="/products" className="text-wood-dark font-medium hover:text-wood transition-colors inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="card-custom overflow-hidden group">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src="/images/products/laminates.jpg" 
                  alt="Laminates" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Laminates</h3>
              <p className="text-muted-foreground mb-4">Wide range of decorative laminates to enhance your furniture aesthetics.</p>
              <Link to="/products" className="text-wood-dark font-medium hover:text-wood transition-colors inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-wood-dark text-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Business Hours</h2>
                <p className="text-lg mb-4">We are open 6 days a week to serve your needs.</p>
                <div className="flex justify-between border-b border-white/20 py-2">
                  <span>Monday - Saturday</span>
                  <span>9:00 am - 7:00 pm</span>
                </div>
                <div className="flex justify-between border-b border-white/20 py-2">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-wood-dark">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-glass text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8">Contact us today to discuss your requirements or visit our store to see our quality materials firsthand.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/enquiry" className="bg-white text-glass-dark hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-all duration-200 shadow-sm text-center">
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
