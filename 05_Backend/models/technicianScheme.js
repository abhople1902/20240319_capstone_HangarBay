const mongoose = require('mongoose');

// Define schema for operators/technicians
const TechnicianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specializations: [{
    type: String,
    enum: ['Airframe', 'Avionics', 'Engine', 'Interior'],
    required: true
  }],
  experienceYears: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
});


module.exports = TechnicianSchema;
