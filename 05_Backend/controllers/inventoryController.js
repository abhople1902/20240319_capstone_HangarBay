import express from 'express';
const router = express.Router();
import _ from 'lodash';

import InventoryItem from '../models/inventoryModel.js';

// import validateInventoryItem from '../validators/itemvalidator.js';
// const { ConnectionClosedEvent } = require('mongodb');



/**
 * API for getting all inventory items in a category
 */
// router.get('/items', async (req, res) => {
//   const category = req.query.category;
//   console.log(category);

//   try {
//     var item = new Array();
//     let items = await inventory.find({ category: category })
//     items.forEach((x) => {
//       item.push(x);
//     })

//     res.json(item);

//     if (!item) {
//       return res.status(401).json({ message: 'Invalid id' });
//     }

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

async function getInventory(req, res) {
  const category = req.query.category;
  console.log(category);

  try {
    var item = new Array();
    let items = await InventoryItem.find({ category: category })
    // items.forEach((x) => {
    //   item.push(x);
    // })

    res.json(items);

    if (!items) {
      return res.status(401).json({ message: 'Invalid id' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}



/**
 * API for getting inventory by name
 */
async function getInventoryByName(req, res) {
  const name = req.query.name;

  try {
    let item = await InventoryItem.findOne({ name: name })
    // items.forEach((x) => {
    //   item.push(x);
    // })

    res.json(item.quantity);

    if (!item) {
      return res.status(401).json({ message: 'Invalid name of item' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}






/**
 * API for creating new inventory item
 */
// router.post('/add', async (req, res) => {
//   const inputObject = req.body;
//   console.log(inputObject);
//   const { name, category, quantity, unitPrice, createdAt } = req.body;

//   let validationErrors = validateInventoryItem(inputObject);

//   if (!(_.isEmpty(validationErrors))) {
//     console.log(validationErrors);
//   } else {
//     try {
//       const existingItem = await inventory.findOne({ category: category });
//       if (existingItem) {
//         return res.status(400).json({ message: 'Item already exists. PLease update the stock' });
//       } else {
//         const newItem = new inventory({
//           name,
//           category,
//           quantity,
//           unitPrice,
//           createdAt
//         })

//         await newItem.save();
//         res.status(201).json({ message: 'Part added successfully' });
//       }

//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ messgae: 'Internal Server Error' });
//     }
//   }
// })


async function addInventoryItem(req, res) {
  const inputObject = req.body;
  // console.log(inputObject);
  const { name } = req.body;

  // let validationErrors = validateInventoryItem(inputObject);

  // if (!(_.isEmpty(validationErrors))) {
  //   console.log(validationErrors);
  // } else {
    try {
      const existingItem = await InventoryItem.findOne({ name: name });
      if (existingItem) {
        return res.status(400).json({ message: 'Item already exists. Please update the stock' });
      } else {
        const itemDetails = {
          name: req.body.name,
          category: req.body.category,
          quantity: req.body.quantity,
          unitPrice: req.body.unitPrice
        };
        // console.log(itemDetails);
        const newItem = new InventoryItem(itemDetails)

        await newItem.save();
        // console.log(newItem)
        res.status(201).json({ message: 'Part added successfully', newItem });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ messgae: 'Internal Server Error' });
    }
  // }
}


/**
 * API for updating inventory
 */
async function updateInventory(req, res){
  const itemname = req.query.name;
  const { quantity } = req.body;

  try {
    // Find the repair by ID
    const doc = await InventoryItem.findOne({name: itemname});

    // Check if the item exists
    if (!doc) {
      return res.status(404).json({ message: 'Item not found' });
    }
    // Update the status of the repair
    const originalQuantity = doc.quantity;


    doc.quantity = originalQuantity - quantity;
    await doc.save();

    // Return the updated repair
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}




// Default route for handling undefined routes
// router.use((req, res) => {
//   res.status(404).send('<h1>404 Page Not Found</h1>');
// });



export { 
  getInventory,
  getInventoryByName,
  addInventoryItem,
  updateInventory
}