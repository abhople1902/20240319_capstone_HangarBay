import express from "express";
const router = express.Router();
import _ from 'lodash';

import { technicianSignup, technicianLogin } from '../controllers/authController.js';

router.post("/techsignup", technicianSignup);

router.post("/techsignin", technicianLogin);

export default router;