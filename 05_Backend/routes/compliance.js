const express = require('express');
const router = express.Router();
const _ = require('lodash');
const compliance = require('../models/complianceModel');

const { validateInventoryItem } = require('../validators/itemvalidator');
const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for getting the compliance documents
 */
router.get('/document', async (req, res) => {
  const title = req.query.title;
  console.log(title);

  try {
    // var item = new Array();
    let item = await compliance.find({ title: title })
    // items.forEach((x) => {
    //   item.push(x);
    // })

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