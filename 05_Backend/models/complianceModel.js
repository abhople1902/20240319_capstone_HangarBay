import mongoose from 'mongoose';
import { ComplianceSchema } from './commons.js';


const Compliance = mongoose.model('Compliance', ComplianceSchema);

export {
  Compliance
}