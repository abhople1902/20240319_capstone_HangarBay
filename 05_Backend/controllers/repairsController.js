import express from 'express';
const router = express.Router();
import _ from 'lodash';
// const inventory = require('../models/inventoryScheme');

import Repair from '../models/repairsModel.js';
// const Technician = require('../models/technicianScheme');

// const { validateRepair } = require('../validators/repairvalidator');
// const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for creating repairs
 */
// router.post('/create', async (req, res) => {
//   const inputObject = req.body;
//   console.log(inputObject);
//   const { description, category, compliance, scheduledDate, status, assignedTechnician, inventoryItems, durationRequired } = req.body;

//   // let validationErrors = validateRepair(inputObject);

//   // if (!(_.isEmpty(validationErrors))) {
//   //   console.log(validationErrors);
//   // } else {
//     try {
//       const existingRepair = await repair.findOne({ assignedTechnician: assignedTechnician });
//       if (existingRepair) {
//         return res.status(400).json({ message: 'Technician already assigned' });
//       } else {
//         const newRepair = new repair({
//           description,
//           category,
//           compliance,
//           scheduledDate,
//           status,
//           assignedTechnician,
//           inventoryItems,
//           durationRequired
//         })
//         await newRepair.save();
//         res.status(201).json({ message: 'Repair created successfully' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ messgae: 'Internal Server Error' });
//     }
//   // }

// })

async function createRepairs(req, res){
  const inputObject = req.body;
  console.log(inputObject);
  const { name, description, category, compliance, scheduledDate, status, assignedTechnician, inventoryItems, durationRequired } = req.body;

  // let validationErrors = validateRepair(inputObject);

  // if (!(_.isEmpty(validationErrors))) {
  //   console.log(validationErrors);
  // } else {
    try {
      // const existingRepair = await Repair.findOne({ assignedTechnician: assignedTechnician });
      // if (existingRepair) {
      //   return res.status(400).json({ message: 'Technician already assigned' });
      // } else {
        const newRepair = new Repair({
          name: req.body.name,
          description: req.body.description,
          category: req.body.category,
          compliance: req.body.compliance,
          scheduledDate: req.body.scheduledDate,
          status: req.body.status,
          assignedTechnician: req.body.assignedTechnician,
          inventoryItems: req.body.inventoryItems,
          durationRequired: req.body.durationRequired
        })
        await newRepair.save();
        res.status(201).json({ message: 'Repair created successfully' });
      // }
    } catch (error) {
      console.error(error);
      res.status(500).json({ messgae: 'Internal Server Error' });
    }
  // }
}











/**
 * API to get all repairs
 */
// router.get('/all', async (req, res) => {
//   const repairId = req.params.id;

//   try {
//     const doc = await repair.find();

//     // Check if the repairs exists
//     if (!doc) {
//       return res.status(404).json({ message: 'No Repairs found. Come back later' });
//     }
//     // Return the repairs
//     res.json(doc);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });


async function getRepairs(req, res){
  const repairId = req.params.id;

  try {
    const doc = await Repair.find();

    // Check if the repairs exists
    if (!doc) {
      return res.status(404).json({ message: 'No Repairs found. Come back later' });
    }
    // Return the repairs
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}














// API to update the status of a repair
// router.put('/status/:id', async (req, res) => {
//   const repairId = req.params.id;
//   const { status } = req.body;

//   try {
//     // Find the repair by ID
//     const doc = await repair.findById(repairId);

//     // Check if the repair exists
//     if (!doc) {
//       return res.status(404).json({ message: 'Repair not found' });
//     }

//     // Update the status of the repair
//     doc.status = status;

//     await doc.save();

//     // Return the updated repair
//     res.json(doc);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });


async function updateRepair(req, res){
  const repairId = req.params.id;
  const { status } = req.body;

  try {
    // Find the repair by ID
    const doc = await Repair.findById(repairId);

    // Check if the repair exists
    if (!doc) {
      return res.status(404).json({ message: 'Repair not found' });
    }

    // Update the status of the repair
    doc.status = status;

    await doc.save();

    // Return the updated repair
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


export { 
  createRepairs,
  getRepairs,
  updateRepair 
}