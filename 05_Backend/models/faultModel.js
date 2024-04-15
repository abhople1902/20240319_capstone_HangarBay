import mongoose from "mongoose";
import { MinorFaultSchema } from "./commons.js";

const Fault = new mongoose.model('Fault', MinorFaultSchema);

export {
  Fault
}