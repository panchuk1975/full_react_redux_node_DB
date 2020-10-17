const { Schema, model, Typees } = require("mongoose");

const schema = new Schema({
  projectNum: { type: Number, required: true },
  contractNum: { type: String, required: true },
  responsible: { type: String },
  payDate: { type: Date },
  paySumm: { type: Number },
  debtSumm: { type: Number },
});

module.exports = model("Payment", schema);