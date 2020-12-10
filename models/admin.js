require("./connection");
const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const AdminSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  address: String,
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: Date,
  initKey: {
    type: String,
    default: process.env.ADMIN_KEY,
  },
  permKey: String,
  superAdminPass: {
    type: String,
    default:'123456789',
  },
  superAdminEmail: {
    type: String,
    default: 'superadmin@femossurvey.com'
  },
});
AdminSchema.methods.getInitialKey = function () {
  return this.initKey;
};
AdminSchema.statics.setPermKey = function (perm, email) {
  if (this.email === email) {
    this.permKey = perm;
  }
};
AdminSchema.methods.setSuperAdminPassword = function(email, pass){
 if(email === this.superAdminEmail){
   this.superAdminPass = pass;
 }
};
AdminSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model("AdminModel", AdminSchema);
