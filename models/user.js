require("./connection");
const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const UserSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  address: String,
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  dateOfBirth: Date,
  email: {
    type: String,
    unique: true,
    required: true,
  },
});
UserSchema.methods.getAge = function () {
  return new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear();
};
UserSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model("UserModel", UserSchema);
