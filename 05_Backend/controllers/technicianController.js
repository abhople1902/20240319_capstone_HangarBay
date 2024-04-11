import express from 'express';
const router = express.Router();
import _ from 'lodash';

import Technician from '../models/technicianModel.js';


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
  const special = req.body;
  console.log(req.body);

  try {
    let item = await Technician.find({ specializations: special.specializations })

    res.json(item);

    if (!item) {
      return res.status(401).json({ message: 'Invalid id' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}



async function findTechnicianByName(req, res) {
  const username = req.query.name;
  // console.log(req.body);

  try {
    let person = await Technician.findOne({ username: username })

    res.json(person.email);

    if (!person) {
      return res.status(401).json({ message: 'Invalid id' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}




// module.exports = router;
export {
  findTechnicianByCategory,
  findTechnicianByName
}