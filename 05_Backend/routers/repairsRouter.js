import express from "express";
const router = express.Router();
import _ from 'lodash';

// const inventory = require('../models/inventoryScheme');
// const repair = require('../models/repairsModel');
import {createRepairs, getRepairs, updateRepair} from '../controllers/repairsController.js';
// const Technician = require('../models/technicianScheme');

// const { validateRepair } = require('../validators/repairvalidator');
// const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for creating repairs
 */
router.post("/create", createRepairs);



/**
 * API to get all repairs
 */
router.get("/all", getRepairs);



/**
 * API to update the status of a repair
 */
router.put("/status/:id", updateRepair);

export default router;