const express = require('express');
const router = express.Router();
//const Contact = require('../models/Enquiry');
const Enquiry = require('../models/Enquiry');

router.post('/enquiry', async (req, res) => {
  console.log('Received form submission:', req.body); // ✅ this line for debugging

  const { fullName, email, phoneNumber, subject, message } = req.body;

  try {
    const newEnquiry = new Enquiry({
      fullName,
      email,
      phoneNumber,
      subject,
      message
    });

    await newEnquiry.save();
    res.status(201).json({ message: 'Enquiry form submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error); // ✅ log errors too
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
