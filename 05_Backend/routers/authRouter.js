const express = require('express');
const router = express.Router();
const authController = require ("../controllers/authController");




router.post('/techsignup', authController.technicianSignup);

router.post('/techlogin', authController.technicianLogin);

module.exports = router;