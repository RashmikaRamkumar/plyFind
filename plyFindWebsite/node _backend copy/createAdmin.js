const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();
const Admin = require('./models/Admin'); // adjust path if needed

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');

  const newAdmin = new Admin({
    email: 'rakesh@gmail.com',
    password: bcrypt.hashSync('raki1', 10)

  });

  return newAdmin.save();
}).then(() => {
  console.log('Admin user created!');
  mongoose.disconnect();
}).catch(err => console.error(err));
