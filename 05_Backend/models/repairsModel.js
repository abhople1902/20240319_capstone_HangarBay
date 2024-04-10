import mongoose from 'mongoose';

import { ComplianceSchema, TechnicianSchema, InventoryItemSchema } from './commons.js';
import { category, status } from '../constants.js';

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
    type: String,
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
    type: String,
    required: true
  },
  inventoryItems: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
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
export default Repair;