const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  todoName: { type: String, required: true },
  todoDetail: { type: String, required: true },
  done: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model("todo", TodoSchema);