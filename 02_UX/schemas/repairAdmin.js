const mongoose = require('mongoose');

// Define schema for repair administrators
const RepairAdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
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
  }
});

// Define RepairAdmin model
const repairAdmin = mongoose.model('RepairAdmin', RepairAdminSchema);

module.exports = repairAdmin;
