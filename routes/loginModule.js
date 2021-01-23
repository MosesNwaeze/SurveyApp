const User = require("../models/user");
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

exports.user = (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, data) => {
    if (err) {
      console.log(err.stack);
    }
    if (data) {
      if (data.email === req.body.email) {
        bcrypt.compare(req.body.password, data.password, (err, result) => {
          if (err) {
            console.log(`error ${err.stack}`);
            return next(createError(403));
          }

          if (result) {
            if (req.session) {
              req.session.user = {};
              req.session.user.name = data.firstName + " " + data.lastName;
              req.session.user.email = data.email;
              req.session.user.id = data._id;
            }
            const user = {};
            user.name = data.firstName + " " + data.lastName;
            user.email = data.email;
            const token = jwt.sign(user, process.env.TOKEN_SECRET, {
              expiresIn: "1h",
            });
            const resData = {
              email : data.email,
              id : data._id
            };
            return res.status(200).json({
              status: "success",
              data: resData,
              token,
            });
          } else {
            return res.status(400).json({
              status: "error",
              data: "restricted access",
            });
          }
        });
      }
    } else {
      return res
        .status(400)
        .json({ status: "error", data: "Restricted access" });
    }
  });
};

exports.admin = (req, res, next) => {
  // Capture the admin based on the uniqueness of their email address. i.e admin1@femossurvey.com
  try {
    Admin.findOne({ email: req.body.email }, (e, data) => {
      if (e) {
        next();
      }
      bcrypt.compare(req.body.password, data.password, (err, pass) => {
        if (err) {
          return res.status(401).json({
            status: "error",
            data: "Unauthorized access",
          });
        }
        if (pass) {
          if (data.email === req.body.email && data.permKey === req.body.key) {
            if (req.session) {
              req.session.user = {};
              req.session.user.name = data.firstName + " " + data.lastName;
              req.session.user.email = req.body.email;
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
        }
        return res.status(401).json({
          status: "error",
          data: "Unauthorized access",
        });
      });
    });
  } catch (e) {
    next(createError(401));
  }
};
