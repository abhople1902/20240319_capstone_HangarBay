import express from 'express';
const router = express.Router();
import _ from 'lodash';
// const inventory = require('../models/inventoryScheme');

import Repair from '../models/repairsModel.js';
import { Fault } from '../models/faultModel.js';
import Technician from '../models/technicianModel.js';
import nodemailer from 'nodemailer';

// const { validateRepair } = require('../validators/repairvalidator');
// const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for creating repairs
 */
async function createRepairs(req, res) {
  // const user = req.user;
  // if(!user.role == 'admin'){
  //   res.status(501).json("You are not authorized");
  // }
  const inputObject = req.body;
  console.log(inputObject);
  const { name, description, category, compliance, scheduledDate, status, assignedTechnician, inventoryItems, durationRequired } = req.body;

  // let validationErrors = validateRepair(inputObject);

  // if (!(_.isEmpty(validationErrors))) {
  //   console.log(validationErrors);
  // } else {
  try {
    const techinfo = await Technician.findOne({ username: assignedTechnician });
    const existingRepair = await Repair.findOne({ assignedTechnician: assignedTechnician });
    if (existingRepair) {
      return res.status(400).json({ message: 'Technician already assigned' });
    } else {
      const newRepair = new Repair({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        durationRequired: req.body.durationRequired,
        quantity: req.body.quantity,
        compliance: req.body.compliance,
        scheduledDate: req.body.scheduledDate,
        status: req.body.status,
        assignedTechnician: req.body.assignedTechnician,
        inventoryItems: req.body.inventoryItems,
      })
      await newRepair.save();


      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: 'nodemailer470@gmail.com',
          //  Pass contain the App passwords 
          pass: 'aydr qxge onmi dcik'
        }
      });

      const emailData = {
        from: 'Air India Hangar', // Sender information
        to: techinfo.email, // Use fetched patient email
        subject: 'New Repair scheduled',
        text: `The following repair is created and assigned to you`,
        html: `<!DOCTYPE html>
              <html>
              <body>
                <h1>Air India Hangar</h1>
                <p>Dear operator,</p>
                <p>New Repair scheduled</p>
                <p>Details:</p>
                <ul>
                  <li>Name: ${req.body.name}</li>
                  <hr>
                  <li>Category:
                    <ul>
                      ${req.body.category}
                    </ul>
                  </li>
                </ul>
              </body>
              </html>`
      };
      await transporter.sendMail(emailData);

      res.status(201).json({ message: 'Repair created successfully and mail sent' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ messgae: 'Internal Server Error' });
  }
}





/**
 * API to store a minor fault
 */
async function createFault(req, res) {
  const { name } = req.body;
  const newFault = new Fault({
    name: req.body.name
  })
  await newFault.save();
  res.status(201).json({ message: 'Fault created successfully' });
}






/**
 * API to get fault name
 */
async function getFault(req, res){
  try {
    const doc = await Fault.find();
    if (!doc) {
      return res.status(404).json({ message: 'No Faults found. Check back later' });
    }
    res.json(doc);
  } catch (error){
    console.error(error);
    res.status(500).json({ message: 'Internal Server error' });
  }
}






/**
 * API to get all repairs
 */
async function getRepairs(req, res) {

  try {
    const doc = await Repair.find();

    // Check if the repairs exists
    if (!doc) {
      return res.status(404).json({ message: 'No Repairs found. Check back later' });
    }
    // Return the repairs
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}






async function getRepairsByUsername(req, res) {
  const assignedTechnician = req.query.username;
  try {
    const doc = await Repair.find({ assignedTechnician: assignedTechnician });

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


async function updateRepair(req, res) {
  const repairId = req.params.id;
  const { status } = req.body;

  try {
    // Find the repair by ID
    const doc = await Repair.findById(repairId);
    console.log(doc);

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
  createFault,
  getFault,
  getRepairs,
  getRepairsByUsername,
  updateRepair
}