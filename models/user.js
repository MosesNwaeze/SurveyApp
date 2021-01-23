const dbServer = require("./connection");
const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

let UserSchema = null;
try {
  dbServer.startServer();
  UserSchema = mongoose.Schema({
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
  UserSchema.methods.getId = function (email) {
    if(email === this.email){
      return this._id;
    }
  };
  UserSchema.plugin(mongooseUniqueValidator);
} catch (error) {
  console.log(error);
} finally {
  //dbServer.shutdownServer();
}
module.exports = mongoose.model("UserModel", UserSchema);
