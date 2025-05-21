const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Routes
const contactRoutes = require('./routes/contactRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend for plyFind is up and running!');
});
// Use Routes
app.use('/api', contactRoutes);
app.use('/api', enquiryRoutes);
app.use('/api/admin', adminRoutes);  
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




































/*
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const contactRoutes = require('./routes/contactRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Use the contact routes here
app.use('/api', contactRoutes);
app.use('/api', enquiryRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://padmapriyarajasekaran2004:sAAIa01F51FNb1pA@ply.nx5hn6q.mongodb.net/plyFind?retryWrites=true&w=majority&appName=ply', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
  

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

*/








