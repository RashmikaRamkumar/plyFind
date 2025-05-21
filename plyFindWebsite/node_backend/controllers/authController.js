// controllers/authController.js
const User = require('../models/userSchema'); // Import your User model
const bcrypt = require('bcrypt'); // Import bcrypt for password comparison

// Controller for login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate the request body
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password matches (assuming password is hashed)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Login successful - send back user data (could be a JWT token instead)
        res.status(200).json({
            userId: user.userId,
            name: user.name,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};

module.exports = {
    loginUser,
};
