import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        subject: "",
        message: "",
    });

    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { fullName, phoneNumber, subject, message } = formData;
        if (!fullName || !phoneNumber || !subject || !message) {
            setStatusMessage("All fields are required.");
            return false;
        }
        if (!/^\d+$/.test(phoneNumber)) {
            setStatusMessage("Phone number must contain only digits.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage("");

        if (!validateForm()) return;

        try {
            const response = await axios.post("/api/contact", formData);
            if (response.status === 200) {
                setStatusMessage("Message sent successfully!");
                setFormData({ fullName: "", phoneNumber: "", subject: "", message: "" });
            }
        } catch (error) {
            setStatusMessage("Failed to send message. Please try again later.");
        }
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};

export default Contact;