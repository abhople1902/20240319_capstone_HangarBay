import mongoose from 'mongoose';
import { category } from '../constants.js';


/**
 * Minor fault schema,
 * name: defines the name of the fault,
 */
const MinorFaultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})


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
  category: {
    type: String,
    enum: category,
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
    enum: category,
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
 * Technician schema
 */
const TechnicianSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["operator","admin"],
    default: "operator"
  },
  specializations: {
    type: String,
    enum: category,
    required: true
  },
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



/**
 * Orders Schema
 */
const OrderSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})


export { 
  MinorFaultSchema,
  ComplianceSchema,
  InventoryItemSchema,
  TechnicianSchema,
  OrderSchema
 }