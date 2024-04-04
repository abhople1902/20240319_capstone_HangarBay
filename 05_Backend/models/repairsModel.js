const mongoose = require('mongoose');
const { ComplianceSchema, TechnicianSchema, InventoryItemSchema } = require('./commons');
const { category, status } = require('../constants');

const RepairSchema = new mongoose.Schema({
  // aircraft: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Aircraft',
  //   required: true
  // },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: category,
    required: true
  },
  compliance: {
    type: mongoose.Schema.ObjectId,
    ref: 'Compliance',
    required: true
  },
  scheduledDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  status: {
    type: String,
    enum: status,
    default: 'In Progress'
  },
  assignedTechnician: {
    type: mongoose.Schema.ObjectId,
    ref: 'Technician',
    required: true,
  },
  inventoryItems: [{
    type: InventoryItemSchema
  }],
  // inventoryItems: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: InventoryItem,
  //   required: true,
  //   default: "Spare"
  // },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  durationRequired: {
    type: Number,
    required: true,
    default: 1
  }
});

// Defining virtual to dynamically populate inventory items based on category
// RepairSchema.virtual('inventoryItems', {
//   ref: InventoryItem,
//   localField: 'category',
//   foreignField: 'category',
//   justOne: false
// });

// Defining virtual field to dynamically populate technicians based on category
// RepairSchema.virtual('assignedTechniciansByCategory', {
//   ref: Technician,
//   localField: 'category',
//   foreignField: 'specializations',
//   justOne: false
// });


const Repair = mongoose.model('Repair', RepairSchema);

module.exports = Repair;