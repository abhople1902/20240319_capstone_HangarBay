const express = require('express');
const router = express.Router();
const _ = require('lodash');

const compliance = require('../models/complianceModel');
const complianceController = require('../controllers/complianceController');

const { validateInventoryItem } = require('../validators/itemvalidator');
const { ConnectionClosedEvent } = require('mongodb');


/**
 * API for getting the compliance documents
 */

router.post("/document", complianceController.getComplianceDocument);

// module.exports = router;
module.exports = router