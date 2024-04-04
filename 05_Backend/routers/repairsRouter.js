const express = require('express');
const router = express.Router();
const _ = require('lodash');

// const inventory = require('../models/inventoryScheme');
// const repair = require('../models/repairsModel');
const repairsController = require('../controllers/repairsController');
// const Technician = require('../models/technicianScheme');

// const { validateRepair } = require('../validators/repairvalidator');
// const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for creating repairs
 */
router.post("/create", repairsController.createRepairs);



/**
 * API to get all repairs
 */
router.get("/all", repairsController.getRepairs);



/**
 * API to update the status of a repair
 */
router.put("/status/:id", repairsController.updateRepair);


module.exports = router