const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  projectNumber: { type: Number, required: true, unique: true },
  contractNumber: { type: String, required: true },
  contPerson: { type: String, required: true },
  phonNumber: { type: String },
  talksDate: { type: Date },
  result: { type: String },
  infoSrc: { type: String },
  personResp: { type: String },
  dataSign: { type: Date },
  contractTerm: { type: Date },
  typesOfJobs: { type: String },
  cost: { type: Number },
  isContract: { type: Boolean },
  isSign: { type: Boolean },
  costSumm: { type: Number },
  debtSumm: { type: Number },
  allSumm: { type: Number },
  landPerson: { type: String },
  jobsPerson: { type: String },
  jobsFinishDate: { type: Date },
  jobsRate: { type: Number },
  jobsStartDate: { type: Date },
  areaDepartureDate: { type: Date },
  xmlDev: { type: Date },
  docLandDev: { type: Date },
  customerApproval: { type: Date },
  submissionDateDocDZK: { type: Date },
  extractObtainingDateDZK: { type: Date },
  submissionDateDocExtrAppr: { type: Date },
  remarksCorDateExtrAppr: { type: Date },
  extractDateDocExtrAppr: { type: Date },
  submissionExpDate: { type: Date },
  extractExpDate: { type: Date },
  submissionDRRPDate: { type: Date },
  extractDRRPDate: { type: Date },
  projectDoneDate: { type: Date },
  owner: { type: Types.ObjectId, ref: "User" },
  payments: [{ type: Types.ObjectId, ref: "Payment" }],
  tasks: [{ type: Types.ObjectId, ref: "Task" }],
});

module.exports = model("Client", schema);
