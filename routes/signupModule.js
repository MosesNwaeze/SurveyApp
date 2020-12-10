const User = require("../models/user");
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

exports.user = (req, res, next) => {
  User.findOne({ email: req.body.email }, function (err, result) {
    if (err) {
      console.log(err.stack);
      // 400- bad request
      return next(createError(400));
    }

    try {
      if (!result) {
        bcrypt.hash(req.body.password, 10, (e, password) => {
          if (e) {
            console.log("Error hashing password \n" + e.stack);
          }
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            password: password,
            dateOfBirth: req.body.dob,
            phoneNumber: req.body.phoneNumber,
          });
          user.save((err, data) => {
            if (err) {
              console.log(`Unable to save new user ${err.stack}`);
            }
            if (user.getAge() < 18) {
              // 403- forbidden
              return res.status(400).json({
                status: "error",
                data:
                  "You are not up to the required age to use this application",
              });
            } else {
              if (req.session && !req.session.fullName) {
                req.session.fullName = data.firstName + " " + data.lastName;
              }
              const token = jwt.sign(user, process.env.TOKEN_SECRET, {
                expiresIn: "2h",
              });
              return res.status(200).json({
                status: "success",
                data: data.email,
                token,
              });
            }
          });
        });
      }
    } catch (e) {
      throw new Error("User already exist! " + e.message);
    }
  });
};

exports.admin = (req, res, next) => {
  try {
    Admin.findOne({ email: req.body.email }, (err, data) => {
      if (err) {
        return next(createError(401));
      }
      if (!data) {
        bcrypt.hash(req.body.password, 10, (e, password) => {
          if (e) {
            console.log("Error hashing password \n" + e.stack);
          }
          const admin = new Admin({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            password: password,
            dateOfBirth: req.body.dob,
            phoneNumber: req.body.phoneNumber,
          });
          admin.save((err, data) => {
            if (err) {
              console.log("Error in persisting data \n" + err.stack);
              next(createError(500));
            }

            const token = jwt.sign(user, process.env.TOKEN_SECRET, {
              expiresIn: "2h",
            });

            if (req.session) {
              req.session.initKey = admin.getInitialKey();
              req.session.email = req.body.email;
              req.session.fullName = req.body.firstName + " " + req.body.lastName;
              return res.status(200).json({
                status: "success",
                data: req.body.email,
                token: token,
              });
            }
          });
        });
      } else {
        res.redirect(303, "/users");
      }
    });
  } catch (e) {
    next(createError(500));
  }
};
