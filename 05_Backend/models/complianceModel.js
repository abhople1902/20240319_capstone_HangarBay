const mongoose = require('mongoose');
const { ComplianceSchema } = require('./commons')


const Compliance = mongoose.model('Compliance', ComplianceSchema);

module.exports = Compliance;