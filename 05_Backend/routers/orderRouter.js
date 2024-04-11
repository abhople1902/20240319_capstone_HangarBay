import express from "express";
const router = express.Router();
import _ from 'lodash';

import { createOrder, getAllOrders } from "../controllers/orderController.js";

router.post("/create", createOrder);

router.get("/all", getAllOrders);

export default router;