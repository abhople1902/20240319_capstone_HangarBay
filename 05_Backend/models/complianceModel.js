const mongoose = require('mongoose');


const ComplianceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});


const Compliance = mongoose.model('compliance', ComplianceSchema);

module.exports = Compliance;