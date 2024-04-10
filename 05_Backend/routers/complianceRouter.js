import express from "express";
const router = express.Router();
import _ from 'lodash';

import { getAllCompliances, getComplianceDocument } from "../controllers/complianceController.js";


/**
 * API for getting the compliance documents
 */
router.get("/document", getComplianceDocument);


/**
 * API for getting the compliance documents
 */
router.get("/all", getAllCompliances);


export default router;