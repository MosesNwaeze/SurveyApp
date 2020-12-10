require("./connection");
const { Schema, Mongoose } = require("mongoose");
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const ResponseSchema = mongoose.Schema({
  surveyTitle: String,
  surveyNumber: Number,
  question1: {
    option: [String],
  },
  question2: {
    option: [String],
  },
  question3: {
    option: [String],
  },
  question4: {
    option: [String],
  },
  question5: {
    option1: [String],
  },
  question6: {
    option: [String],
  },
  question7: {
    option: [String],
  },
  question8: {
    option: [String],
  },
  question9: {
    option: [String],
  },
  question10: {
    option: [String],
  },
  responseDate: Date,
  respondantId: [
    {
      type: Schema.Types.ObjectId,
      ref: "UserModel",
    },
  ],
});

ResponseSchema.plugin(autoIncrement.plugin, {
  model: "ResponseSchema",
  field: "surveyNumber",
  startAt: 1,
});
module.exports = mongoose.model("ResponseModel", ResponseSchema);
