import { useState } from 'react';

const Contact = () => {
  // Step 1: State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  
  const [statusMessage, setStatusMessage] = useState('');

  // Step 2: Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, phone, message } = formData;
    
    if (!name || !phone || !message) {
      setStatusMessage('All fields are required.');
      return;
    }
    
    // Prepare the data to be sent
    const contactData = {
      fullName: name,
      phoneNumber: phone,
      message,
      subject: 'Contact Form Inquiry', // You can change this or add more fields as needed
    };

    try {
      // Step 4: Send data to backend (adjust the URL accordingly)
      const response = await fetch('https://plyfind.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setStatusMessage('Your message has been sent successfully!');
        setFormData({ name: '', phone: '', message: '' }); // Reset form
      } else {
        setStatusMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wood-light to-glass-light py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="text-lg">Get in touch with us for all your glass and plywood needs.</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg mb-6">Visit Our Store</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Address</h3>
                <p className="text-lg mb-2">Rakesh Glass and Plywood</p>
                <p className="text-lg mb-2">28-C, Nandhini Complex, Kovai Road,</p>
                <p className="text-lg mb-6">Kangeyam, Tamil Nadu – 638701</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <div className="flex items-start mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 mt-1 text-wood">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <p className="text-lg">+91 99449 62351</p>
                    <p className="text-lg">+91 99521 79391</p>
                  </div>
                </div>
                <div className="flex items-start mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 mt-1 text-wood">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <p className="text-lg">rakeshkgm23@gmail.com</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Business Hours</h3>
                <div className="flex items-start mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 mt-1 text-wood">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div>
                    <p className="text-lg mb-1">Monday to Saturday: 9:00 am – 7:00 pm</p>
                    <p className="text-lg">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-wood hover:bg-wood-dark text-white p-3 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-wood hover:bg-wood-dark text-white p-3 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://wa.me/919944962351" className="bg-wood hover:bg-wood-dark text-white p-3 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
                {/* Replace with actual Google Maps embed code */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.6231426927626!2d77.5567!3d10.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI2JzM0LjEiTiA3N8KwMzMnMjQuMSJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rakesh Glass and Plywood location"
                ></iframe>
              </div>
              
              <div className="mt-8 bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Find Us Easily</h3>
                <p className="mb-4">
                  We are conveniently located on Kovai Road in Kangeyam. Look for Nandhini Complex - we're at shop 28-C.
                </p>
                <p className="mb-4">
                  Landmarks: Near State Bank of India, Kangeyam Branch
                </p>
                <a 
                  href="https://goo.gl/maps/your-gmaps-link-here" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Get Directions
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Quick Contact Form */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg text-center mb-8">Send Us a Message</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wood focus:border-wood"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wood focus:border-wood"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wood focus:border-wood"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-primary px-8">
                    Send Message
                  </button>
                </div>
              </form>
              {/* Step 5: Status message */}
              {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
