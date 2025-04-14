
const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wood-light to-glass-light py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">About Us</h1>
            <p className="text-lg">Learn about our journey and commitment to quality in glass and plywood materials.</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Rakesh Glass and Plywood Store" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="mb-4 text-lg">
                Founded and managed by Rakesh, our store has become a go-to destination for high-grade glass and plywood materials. With years of local experience and a strong network of suppliers, we cater to both individual customers and commercial projects.
              </p>
              <p className="mb-6 text-lg">
                Whether you're working on home interiors, modular kitchens, or large-scale constructions, our products meet your quality and cost expectations. Our customer-first approach ensures satisfaction every step of the way.
              </p>
              <div className="border-l-4 border-wood pl-4 italic text-lg">
                "Quality is not just what we deliver; it's who we are. Every product we offer reflects our commitment to excellence."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-custom text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-wood rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
                  <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p>We never compromise on quality. Every product in our inventory undergoes strict quality checks before reaching our customers.</p>
            </div>
            <div className="card-custom text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-wood rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p>Our customers count on us for timely delivery and consistent quality. We honor our commitments to build trust and reliability.</p>
            </div>
            <div className="card-custom text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-wood rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="16"></line>
                  <line x1="8" x2="16" y1="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
              <p>We believe in going the extra mile for our customers. Our team is always ready to assist with product selection and technical guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-wood text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">Our Expertise</h2>
            <p className="text-lg mb-12">
              With years of experience in the industry, we've developed expertise in sourcing and supplying a wide range of glass and plywood materials to meet diverse requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Glass Solutions</h3>
                <p>From decorative to functional, our glass products serve various applications in residential and commercial spaces.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Plywood & Boards</h3>
                <p>We offer a comprehensive range of plywood types, each suited for specific applications and durability requirements.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Interior Materials</h3>
                <p>Complement your projects with our selection of laminates, veneers, and hardware for a complete solution.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Technical Guidance</h3>
                <p>Count on our experienced team to provide expert advice on material selection for your specific requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-glass-dark text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg mb-6">Visit our store today or contact us to discuss your requirements.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="/products" className="bg-white text-glass-dark hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-all duration-200 shadow-sm">
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
