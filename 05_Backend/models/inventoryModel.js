const mongoose = require('mongoose');
const {InventoryItemSchema} = require('./commons')


const InventoryItem = mongoose.model('InventoryItem', InventoryItemSchema);

module.exports = InventoryItem;