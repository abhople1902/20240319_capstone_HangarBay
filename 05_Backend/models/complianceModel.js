const mongoose = require('mongoose');
const { ComplianceSchema } = require('./commons')


const Compliance = mongoose.model('compliance', ComplianceSchema);

module.exports = Compliance;