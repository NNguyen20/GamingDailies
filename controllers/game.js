const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dailySchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    content: String
}, {
    timestamps: true
});


const gameSchema = new Schema({
    

    notes: [noteSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('game', gameSchema);