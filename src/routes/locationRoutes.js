const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

// Add Location
router.post('/add', async (req, res) => {
  const { locationName } = req.body;

  try {
    let location = await Location.findOne({ name: locationName });
    if (!location) {
      location = new Location({ name: locationName });
      await location.save();
    }

    res.status(201).send('Location saved');
  } catch (error) {
    res.status(500).send('Error saving location');
  }
});

// Delete Location
router.delete('/delete', async (req, res) => {
  const { locationId } = req.body;

  try {
    await Location.findByIdAndDelete(locationId);
    res.status(200).send('Location removed');
  } catch (error) {
    res.status(500).send('Error removing location');
  }
});

// Get Saved Locations
router.get('/', async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).send('Error fetching saved locations');
  }
});

module.exports = router;
