const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contact', async (req, res) => {
  console.log('Received form submission:', req.body); // ✅ this line for debugging

  const { fullName, phoneNumber, subject, message } = req.body;

  try {
    const newContact = new Contact({
      fullName,
      //emailAddress,
      phoneNumber,
      subject,
      message
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error); // ✅ log errors too
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
