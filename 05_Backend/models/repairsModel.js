const mongoose = require('mongoose');
const InventoryItem = require('./inventoryScheme');
const Technician = require('./technicianScheme');
const Compliance = require('./complianceScheme');

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