import mongoose from 'mongoose';
import { TechnicianSchema } from './commons.js';


const Technician = mongoose.model('Technician', TechnicianSchema);
export default Technician;
