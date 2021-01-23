const dbServer = require("./connection");
const { Schema, Mongoose } = require("mongoose");
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

let ResponseSchema;
try {
  dbServer.startServer();
  ResponseSchema = mongoose.Schema({
    surveyTitle: String,
    surveyNumber: Number,
    question1: {
      options: [{ optionName: String, value: String }],
    },

    question2: {
      options: [{ optionName: String, value: String }],
    },
    question3: {
      options: [{ optionName: String, value: String }],
    },
    question4: {
      options: [{ optionName: String, value: String }],
    },
    question5: {
      options: [{ optionName: String, value: String }],
    },
    question6: {
      options: [{ optionName: String, value: String }],
    },
    question7: {
      options: [{ optionName: String, value: String }],
    },
    question8: {
      options: [{ optionName: String, value: String }],
    },
    question9: {
      options: [{ optionName: String, value: String }],
    },
    question10: {
      options: [{ optionName: String, value: String }],
    },
    responseDate: {
      type: Date,
      default: Date.now,
    },
    respondantId: {
      type: Schema.Types.ObjectId,
      ref: "UserModel",
    },
  });

  ResponseSchema.methods.getUser = function (surveyNumber) {
    if (surveyNumber === this.surveyNumber) {
      return this.respondantId;
    }
  };

  ResponseSchema.plugin(autoIncrement.plugin, {
    model: "ResponseSchema",
    field: "surveyNumber",
    startAt: 1,
  });
} catch (e) {
  console.log(e);
} finally {
  // dbServer.shutdownServer();
}

module.exports = mongoose.model("ResponseModel", ResponseSchema);
