import express from "express";
const router = express.Router();
import _ from 'lodash';
import { Compliance } from '../models/complianceModel.js';

// const { validateInventoryItem } = require('../validators/itemvalidator');
// const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for getting the compliance documents
 */
// router.get('/document', async (req, res) => {
//   const title = req.query.title;
//   console.log(title);

//   try {
//     // var item = new Array();
//     let item = await compliance.find({ title: title })
//     // items.forEach((x) => {
//     //   item.push(x);
//     // })

//     res.json(item);

//     if (!item) {
//       return res.status(401).json({ message: 'Invalid id' });
//     }

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// })


async function getComplianceDocument(req, res){
  const category = req.query.category;
  console.log(category);

  try {
    let item = await Compliance.find({ category: category })

    res.json(item);

    if (!item) {
      return res.status(401).json({ message: 'Invalid' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


/**
 * API for getting all the compliance documents
 */
async function getAllCompliances(req, res){
  try {
    const docs = await Compliance.find();

    // Check if the compliances exists
    if (!docs) {
      return res.status(404).json({ message: 'No Compliances found. Come back later' });
    }
    // Return the compliances
    res.json(docs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}



export {
  getAllCompliances,
  getComplianceDocument
}