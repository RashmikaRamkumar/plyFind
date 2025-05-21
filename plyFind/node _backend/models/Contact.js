
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  //email: { type: String, required: true },
  message: { type: String, required: true },
  subject: { type: String, required: true },
  adminResponse: { type: String, default: "" }
});

module.exports = mongoose.model('Contact', contactSchema);
















/*

// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  //emailAddress: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
*/