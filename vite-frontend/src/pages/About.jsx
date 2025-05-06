import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="px-6 py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Company History */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our History</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Founded in 2010, our company has been dedicated to providing
                        innovative solutions to our customers. Over the years, we have
                        grown from a small startup to a trusted leader in the industry.
                    </p>
                </section>

                {/* Mission Statement */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to empower individuals and businesses by delivering
                        high-quality products and services that drive success and
                        innovation.
                    </p>
                </section>

                {/* Values */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
                    <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                        <li>Integrity: We uphold the highest standards of honesty.</li>
                        <li>Innovation: We embrace creativity and forward-thinking.</li>
                        <li>Customer Focus: We prioritize the needs of our customers.</li>
                        <li>Collaboration: We believe in the power of teamwork.</li>
                    </ul>
                </section>

                {/* Team Information */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our team is composed of talented professionals who are passionate
                        about what they do. Together, we work to achieve excellence in
                        every project we undertake.
                    </p>
                </section>

                {/* Call-to-Action Buttons */}
                <div className="flex space-x-4 mt-8">
                    <Link
                        to="/products"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Explore Products
                    </Link>
                    <Link
                        to="/contact"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;