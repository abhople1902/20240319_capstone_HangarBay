const mongoose = require('mongoose');


/**
 * Compliance schema,
 * title: defines the title of compliance,
 * content: defines the content of compliance
 */
const ComplianceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});


/**
 * InventoryItem schema,
 * name: name of item in inventory,
 * category: category of the item,
 * 
 */
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


/**
 * Repairs schema
 */
const RepairSchema = new mongoose.Schema({
  // aircraft: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Aircraft',
  //   required: true
  // },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Airframe', 'Avionics', 'Engine', 'Interior'],
    required: true
  },
  compliance: {
    type: Compliance
  },
  scheduledDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['In Progress', 'Completed', 'Delayed'],
    default: 'In Progress'
  },
  assignedTechnician: {
    type: Technician,
    // required: true,
    // default: "Open to all"
  },
  inventoryItems: [{
    type: InventoryItem
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


/**
 * Technician schema
 */
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
  }
});

module.exports = { ComplianceSchema, InventoryItemSchema, RepairSchema, TechnicianSchema };