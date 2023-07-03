const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const todoscheme = new Schema({
  name: String,
  id: Number,
});

const todo = model("todo", todoscheme);
module.exports = { todo };
