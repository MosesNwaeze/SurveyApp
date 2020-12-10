const express = require("express");
const createHttpError = require("http-errors");
const router = express.Router();
const Admin = require("../models/admin");
const Survey = require("../models/survey");
const jwt = require("jsonwebtoken");

router.post("/admin", (req, res, next) => {
  try {
    if (req.xhr && req.accepts("json")) {
      const permKey = req.body.perm;
      const { email } = req.session;
      const superAdmin = req.body.supAdmin;
      // check the validity of a super admin
      Admin.find({ superAdminPass: superAdmin }, (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            status: "error",
            data: "Internal server Error",
          });
        }

        if (data.superAdminPass && data.superAdminPass !== superAdmin) {
          return res.status(400).json({
            status: "error",
            data: "Unauthorized admin",
          });
        }
      });
      Admin.setPermKey(permKey, email);
      const user = {};
      user.key = permKey;
      user.email = email;
      const token = jwt.sign(user, process.env.TOKEN_SECRET, {
        expiresIn: "2h",
      });
      return res.status(200).json({
        status: "success",
        data: email,
        token,
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: "error",
      data: "Internal Server Error " + e.message,
    });
  }
});

router.get("/admin", function (req, res, next) {
  const { email } = req.session;
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
  const payload = decodedToken.user;
  const tEmail = payload.email;
  if (!email && tEmail !== email) {
    return res.redirect(303, "/users-login");
  }

  const initKey = req.session.initKey;
  const title = `Admin panel - restricted area `;
  res.render("admin", {
    layout: "admin",
    title,
    initKey,
  });
});

module.exports = router;
