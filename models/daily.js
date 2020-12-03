const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dailySchema = new Schema({
  name: {type: String, required: true, unique: true},
  born: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('daily', dailySchema);