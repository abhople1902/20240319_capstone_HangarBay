import express from "express";
const router = express.Router();
import _ from 'lodash';

// const inventory = require('../models/inventoryModel');

import { getInventory, getInventoryByName, addInventoryItem, updateInventory, getAllInventory } from '../controllers/inventoryController.js';


// import { validateInventoryItem } from '../validators/itemvalidator';
// const { ConnectionClosedEvent } = require('mongodb');


console.log("hello");
/**
 * API for getting all inventory items in a category
 */
router.get("/items", getInventory);


router.get("/itemname", getInventoryByName);

router.get("/allitems", getAllInventory);



/**
 * API for creating new inventory item
 */
router.post("/add", addInventoryItem);


router.put("/update", updateInventory);


export default router;