import mongoose from 'mongoose';
import { InventoryItemSchema } from './commons.js';


const InventoryItem = mongoose.model('InventoryItem', InventoryItemSchema);
export default InventoryItem