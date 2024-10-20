const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for your data
const devInfoSchema = new mongoose.Schema({
  name: String,
  about: String,
  moreAbout: String
});

// Create a model for your data
const DevInfo = mongoose.model('DevInfo', devInfoSchema);

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to retrieve data from MongoDB
app.get('/api/devinfo', (req, res) => {
  DevInfo.find().then(devInfo => {
    res.json(devInfo);
  }).catch(err => {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving data' });
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});