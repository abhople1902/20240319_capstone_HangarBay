import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
// const cors = require('cors')

// const express = require('express');
// const mongoose = require('mongoose');
// const inventoryRoute = require('./routers/inventoryRouter');
import inventoryRoutes from './routers/inventoryRouter.js';
// const complianceRoute = require('./routers/complianceRouter');
// const repairRoute = require('./routers/repairsRouter');
import repairRoutes from './routers/repairsRouter.js';
import authRoutes from './routers/authRouter.js';
// const cors = require('cors')
// const technicianRoute = require('./routers/technicianRouter');

import { connectDatabase } from "./database.js";

// import { JWT_SECRET } from "./config.js";



// Middleware
const app = express();
app.use(cors());
app.use(express.json());
console.log("heyyy");

connectDatabase().then(() => {
  // Routes
  app.use('/auth', authRoutes);
  app.use('/inventory', inventoryRoutes);
  // app.use('/compliance', complianceRoute);
  app.use('/repairs', repairRoutes);
  // app.use('/technician', technicianRoute);


  // Start server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running. Listening on port ${PORT}`);
  });
}).catch(error => {
  console.error("Error connecting to database:", error);
  process.exit(1); // Exit the process with error status code
});
