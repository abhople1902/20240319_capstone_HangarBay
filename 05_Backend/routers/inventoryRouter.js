const express = require('express');
const router = express.Router();
const _ = require('lodash');

const inventory = require('../models/inventoryModel');
const inventoryController = require('../controllers/inventoryController');

const { validateInventoryItem } = require('../validators/itemvalidator');
const { ConnectionClosedEvent } = require('mongodb');



/**
 * API for getting all inventory items in a category
 */
router.post("/items", inventoryController.getInventory);



/**
 * API for creating new inventory item
 */
router.post("/add", inventoryController.addInventoryItem);


module.exports = router;