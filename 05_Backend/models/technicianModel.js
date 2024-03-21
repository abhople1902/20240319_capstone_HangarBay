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
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const Technician = mongoose.model('Technician', TechnicianSchema);

module.exports = Technician;
