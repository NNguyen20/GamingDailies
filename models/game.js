const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
      type: String,
      required: true
}, 

{
  timestamps: true
});

const gameSchema = new Schema({
      type: String,
      required: true

},
{
  timestamps: true
});

const coreSchema = new Schema ({
  name: {
      type: String,
      required: true
  },
  completed: {
      type: Boolean,
      default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('game', gameSchema);