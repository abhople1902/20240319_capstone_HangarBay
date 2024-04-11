import express from 'express';
const router = express.Router();
import _ from 'lodash';

import { findTechnicianByCategory, findTechnicianByName } from '../controllers/technicianController.js';


/**
 * API for getting the tchnician based on category/specialization
 */
router.post("/operator", findTechnicianByCategory);

router.get("/opinfo", findTechnicianByName);

export default router;