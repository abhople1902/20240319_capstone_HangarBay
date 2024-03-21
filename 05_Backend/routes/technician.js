const express = require('express');
const router = express.Router();
const _ = require('lodash');
const technician = require('../models/technicianModel');

const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for getting the compliance documents
 */
router.post('/operator', async (req, res) => {
  
  special = req.body;
  console.log(req.body);

  // Converting the array of strings to an array of objects
  // const specializationObjects = specializations.map((specialization) => {
  //   return { type: specialization };
  // });

  try {
    let item = await technician.findOne({ specializations: special.specializations })

    res.json(item);

    if (!item) {
      return res.status(401).json({ message: 'Invalid id' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})

module.exports = router;