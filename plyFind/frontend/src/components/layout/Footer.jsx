
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Rakesh Glass and Plywood</h3>
            <p className="text-sm mb-2">28-C, Nandhini Complex, Kovai Road,</p>
            <p className="text-sm mb-2">Kangeyam, Tamil Nadu – 638701</p>
            <p className="text-sm mb-4">Mon - Sat: 9:00 am to 7:00 pm</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-glass transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-glass transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-sm hover:text-glass transition-colors">Products</Link></li>
              <li><Link to="/enquiry" className="text-sm hover:text-glass transition-colors">Enquiry</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-glass transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Phone: +91 99449 62351, +91 99521 79391</p>
            <p className="text-sm mb-4">Email: rakeshkgm23@gmail.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-glass transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-glass transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://wa.me/919944962351" className="text-white hover:text-glass transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <p className="text-sm mb-2">Monday - Saturday</p>
            <p className="text-sm mb-2">9:00 am - 7:00 pm</p>
            <p className="text-sm mb-2">Sunday: Closed</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm">© 2025 Rakesh Glass and Plywood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
