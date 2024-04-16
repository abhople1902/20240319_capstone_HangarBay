import express from "express";
const router = express.Router();
import _ from 'lodash';

// const inventory = require('../models/inventoryScheme');
// const repair = require('../models/repairsModel');
import {createRepairs, createFault, getFault, getRepairs, updateRepair, getRepairsByUsername} from '../controllers/repairsController.js';
// const Technician = require('../models/technicianScheme');
import requireLogin from "../middleware/requireLogin.js";
// const { validateRepair } = require('../validators/repairvalidator');
// const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for creating repairs
 */
router.post("/create", createRepairs);

router.post("/newfault", createFault);

/**
 * API to get all repairs
 */
router.get("/all", getRepairs);

router.get("/allfaults", getFault);

/**
 * API to get repairs by username
 */
router.get("/operator", getRepairsByUsername);



/**
 * API to update the status of a repair
 */
router.put("/status/:id", updateRepair);

export default router;