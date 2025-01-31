const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const locationRoutes = require('./routes/locationRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/weatherApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/locations', locationRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
