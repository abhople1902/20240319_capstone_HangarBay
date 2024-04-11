import express from 'express';
const router = express.Router();
import _ from 'lodash';

import Order from '../models/orderModel.js';

/**
 * API for creating an order
 */
async function createOrder(req, res) {
  const inputObject = req.body;
  // console.log(inputObject);
  const { itemName, quantity } = req.body;

  // let validationErrors = validateInventoryItem(inputObject);

  // if (!(_.isEmpty(validationErrors))) {
  //   console.log(validationErrors);
  // } else {
    try {
      const existingItem = await Order.findOne({ itemName: itemName });
      if (existingItem) {
        return res.status(400).json({ message: 'Item already exists. Please check the stock' });
      } else {
        const itemDetails = {
          itemName: req.body.itemName,
          quantity: req.body.quantity,
        };
        // console.log(itemDetails);
        const newOrder = new Order(itemDetails)

        await newOrder.save();
        // console.log(newItem)
        res.status(201).json({ message: 'Order created successfully', newOrder });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ messgae: 'Internal Server Error' });
    }
  // }
}


/**
 * API for getting all orders
 */
async function getAllOrders(req, res) {

  try {
    var item = new Array();
    let orders = await Order.find();
    // items.forEach((x) => {
    //   item.push(x);
    // })
    if(!orders){
      return res.status(404).json({ message: 'No orders found' });
    }
    res.json(orders);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}





export {
  createOrder,
  getAllOrders
}