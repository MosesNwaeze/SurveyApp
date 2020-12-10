require("./connection");
const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const SurveySchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  surveyTitle: {
    type: String,
    required: true,
  },
  surveyNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  question1: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
  },
  question2: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
  },
  question3: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
  },
  question4: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
  },
  question5: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
  },
  question6: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
  },
  question7: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
  },
  question8: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
  },
  question9: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
  },
  question10: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

SurveySchema.plugin(autoIncrement.plugin, {
  model: "SurveySchema",
  field: "surveyNumber",
  startAt: 1,
});
module.exports = mongoose.model("SurveySchema", SurveySchema);
