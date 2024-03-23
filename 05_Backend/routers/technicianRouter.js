const express = require('express');
const router = express.Router();
const _ = require('lodash');

const technician = require('../models/technicianModel');
const technicianController = require('../controllers/technicianController');

const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for getting the tchnician based on category/specialization
 */
router.post("/operator", technicianController.findTechnicianByCategory);

module.exports = router;