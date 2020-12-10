const express = require("express");
const router = express.Router();
const Response = require("../models/response");
const User = require("../models/user");
const createError = require("http-errors");
const questions = require("./questionHelper");
require("../models/connection");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "SurveyApp-creating your best survey" });
});

module.exports = router;
