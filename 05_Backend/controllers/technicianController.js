const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {technicianModel} = require('../models/index');

const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for getting the tchnician based on category/specialization
 */
// router.post('/operator', async (req, res) => {
  
//   special = req.body;
//   console.log(req.body);

//   try {
//     let item = await technician.findOne({ specializations: special.specializations })

//     res.json(item);

//     if (!item) {
//       return res.status(401).json({ message: 'Invalid id' });
//     }

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// })

async function findTechnicianByCategory(req, res) {
  special = req.body;
  console.log(req.body);

  try {
    let item = await technicianModel.findOne({ specializations: special.specializations })

    res.json(item);

    if (!item) {
      return res.status(401).json({ message: 'Invalid id' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// module.exports = router;
module.exports = { findTechnicianByCategory }