const mongoose = require('mongoose');
const { TechnicianSchema } = require('./commons')


const Technician = mongoose.model('Technician', TechnicianSchema);

module.exports = Technician;
