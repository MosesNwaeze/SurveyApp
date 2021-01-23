const express = require("express");
const router = express.Router();
const Response = require("../models/response");
const User = require("../models/user");
const createError = require("http-errors");
const questions = require("./questionHelper");
const Survey = require("../models/survey");
require("../models/connection");

const getSearch = async (item) => {
  if (item) {
    const results = [];
    try {
      await Response.find({ surveyTitle: item }, (err, result) => {
        if (err) {
          console.log(err.message);
        }
        results.push(result);
      });
      await Survey.find({ surveyTitle: item }, (err, result) => {
        if (err) {
          console.log(err.message);
        }
        results.push(result);
      });
    } catch (e) {
      console.log(e.stack);
    }
    return results;
  }
};

router.get("/", function (req, res, next) {
  if (req.session.user) {
    const sessId = req.session.user.id;
    const id = req.query.id;
    if (sessId && sessId === id) {
      return res.render("index", {
        title: "SurveyApp-creating your best survey",
        sessId,
      });
    }
    return res.redirect(303, "/login");
  }
  return res.redirect(303, "/login");
});

router.get("/search", (req, res, next) => {
  const search = req.query.q;
  const contained = getSearch(search);
  console.log(contained);
  if (contained) {
    res.render("search", { contained });
  } else {
    next();
  }
});

module.exports = router;
