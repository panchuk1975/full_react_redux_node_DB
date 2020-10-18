const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  serialNumber: { type: Number, required: true, unique: true },
  officialName: { type: String, required: true },
  genСontractNum: { type: String, unique: true },
  address: { type: String },
  personStatus: { type: String },
  contactPerson: { type: String },
  telNumber: { type: String },
  dateOfTalks: { type: Date },
  talksResult: { type: String },
  sourceInfo: { type: String },
  respPerson: { type: String },
  signData: { type: Date },
  genСontractTerm: { type: Date },
  owner: { type: Types.ObjectId, ref: "User" },
  //projects: [{ type: Types.ObjectId, ref: "Project" }],
});

module.exports = model("Client", schema);
