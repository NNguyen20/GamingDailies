const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let todoSchema = new Schema(
  {
    content: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);
let gameSchema = new Schema(
  {
    title: String,
    todos: [todoSchema]
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Game", gameSchema);