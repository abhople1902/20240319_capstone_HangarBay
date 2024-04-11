import mongoose from 'mongoose';
import { OrderSchema } from './commons.js';


const Order = mongoose.model('Order', OrderSchema);
export default Order