const express = require('express');
const router = express.Router();
const _ = require('lodash');
const inventory = require('../models/inventoryModel');

const { validateInventoryItem } = require('../validators/itemvalidator');
const { ConnectionClosedEvent } = require('mongodb');



/**
 * API for getting all inventory items in a category
 */
router.get('/items', async (req, res) => {
  const category = req.query.category;
  console.log(category);

  try {
    var item = new Array();
    let items = await inventory.find({ category: category })
    items.forEach((x) => {
      item.push(x);
    })

    res.json(item);

    if (!item) {
      return res.status(401).json({ message: 'Invalid id' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});






/**
 * API for creating new inventory item
 */
router.post('/add', async (req, res) => {
  const inputObject = req.body;
  console.log(inputObject);
  const { name, category, quantity, unitPrice, createdAt } = req.body;

  let validationErrors = validateInventoryItem(inputObject);

  if (!(_.isEmpty(validationErrors))) {
    console.log(validationErrors);
  } else {
    try {
      const existingItem = await inventory.findOne({ category: category });
      if (existingItem) {
        return res.status(400).json({ message: 'Item already exists. PLease update the stock' });
      } else {
        const newItem = new inventory({
          name,
          category,
          quantity,
          unitPrice,
          createdAt
        })

        await newItem.save();
        res.status(201).json({ message: 'Part added successfully' });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ messgae: 'Internal Server Error' });
    }
  }
})




// Default route for handling undefined routes
router.use((req, res) => {
  res.status(404).send('<h1>404 Page Not Found</h1>');
});


module.exports = router;