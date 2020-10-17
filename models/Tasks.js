const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  taskNum: { type: Number, required: true },
  taskPerson: { type: String, required: true },
  respPerson: { type: String },
  date: { type: Date },
  finishDate: { type: Date },
  taskContent: { type: String },
  accepted: { type: Boolean },
  done: { type: Boolean },
  owner: { type: Types.ObjectId, ref: "Project" },
});

module.exports = model("Task", schema);
