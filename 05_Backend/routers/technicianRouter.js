import express from 'express';
const router = express.Router();
import _ from 'lodash';

import { findTechnicianByCategory } from '../controllers/technicianController.js';


/**
 * API for getting the tchnician based on category/specialization
 */
router.post("/operator", findTechnicianByCategory);

export default router;