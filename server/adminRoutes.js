const express = require("express");
const router = express.Router();
const Enquiry = require("./models/Enquiry"); // Import your existing Enquiry schema
const Message = require("./models/Message"); // Import your existing Message schema

// Get all enquiries
router.get("/enquiries", async (req, res) => {
  try {
    const enquiries = await Enquiry.find(); // Fetch all enquiries from the database
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch enquiries" });
  }
});

// Get all messages
router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find(); // Fetch all messages from the database
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;