const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  subject: { type: String, required: true },
  status: { type: String, enum: ['pending', 'done', 'rejected'], default: 'pending' },
  adminResponse: { type: String },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Enquiry', enquirySchema);












/*
// models/Contact.js
const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', enquirySchema);

*/