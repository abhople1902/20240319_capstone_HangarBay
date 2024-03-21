const mongoose = require('mongoose');


const InventoryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Airframe', 'Avionics', 'Engine', 'Interior'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
});


module.exports = InventoryItemSchema;