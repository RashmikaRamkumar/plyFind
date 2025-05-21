import { useState } from "react";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, subject, message } = formData;

    if (!name || !phone || !email || !subject || !message) {
      setStatusMessage("All fields are required.");
      return;
    }

    // Prepare the data to be sent
    const enquiryData = {
      fullName: name,
      phoneNumber: phone,
      email: email,
      message,
      subject, // You can change this or add more fields as needed
    };

    try {
      // Step 4: Send data to backend (adjust the URL accordingly)
      const response = await fetch("https://plyfind.onrender.com/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryData),
      });

      if (response.ok) {
        setStatusMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }); // Reset form
      } else {
        setStatusMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("An error occurred. Please try again.");
    }
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wood-light to-glass-light py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">Send an Enquiry</h1>
            <p className="text-lg">
              Looking for specific plywood or glass materials? Drop us your
              requirements — we'll get back to you shortly!
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 mx-auto mb-4 text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h2 className="text-2xl font-bold mb-2">
                  Enquiry Sent Successfully!
                </h2>
                <p className="mb-4">
                  Thank you for reaching out. We'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="heading-md mb-6">Tell Us What You Need</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wood focus:border-wood"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wood focus:border-wood"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wood focus:border-wood"
                        placeholder="Your contact number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wood focus:border-wood"
                      >
                        <option value="">Select an option</option>
                        <option value="Product enquiry">Product enquiry</option>
                        <option value="Price estimation enquiry">
                          Price estimation enquiry
                        </option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-wood focus:border-wood"
                      placeholder="Please describe your requirements in detail..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn-primary px-8">
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-2">
                  What information should I include in my enquiry?
                </h3>
                <p className="text-muted-foreground">
                  For the quickest response, please include the type of
                  material, quantity, dimensions, and any specific features or
                  certifications you require. Also mention the timeline for your
                  project.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-2">
                  How soon can I expect a response?
                </h3>
                <p className="text-muted-foreground">
                  We typically respond to all enquiries within 24 business
                  hours. For urgent requests, please mention this in your
                  subject line.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Do you provide samples before purchase?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we can provide samples for certain materials. Please
                  mention in your enquiry if you would like to receive samples
                  before making a larger purchase.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Can you deliver materials to my location?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we offer delivery services within Kangeyam and
                  surrounding areas. Delivery charges may apply based on
                  distance and order volume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternate Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-8">
              Other Ways to Reach Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-custom text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-wood rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground mb-2">Call us directly:</p>
                <p className="font-medium">+91 99449 62351</p>
                <p className="font-medium">+91 99521 79391</p>
              </div>

              <div className="card-custom text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-wood rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">
                  Send us an email at:
                </p>
                <p className="font-medium">rakeshkgm23@gmail.com</p>
              </div>

              <div className="card-custom text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-wood rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-2">
                  Message us on WhatsApp:
                </p>
                <p className="font-medium">+91 99449 62351</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enquiry;
