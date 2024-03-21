const mongoose = require('mongoose');

// Define schema for inventory administrators
const InventoryAdminSchema = new mongoose.Schema({
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

// Define InventoryAdmin model
const inventoryAdmin = mongoose.model('InventoryAdmin', InventoryAdminSchema);

module.exports = inventoryAdmin;
