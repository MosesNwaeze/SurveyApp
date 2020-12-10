const express = require("express");
const router = express.Router();
require("../models/connection")();
const Survey = require("../models/survey");

// page title
let title;

router.get(`/${titles}`, function (req, res, next) {
  let surveyContext;
  // Get survey data
  Survey.find({ _id}, (err, data) => {
    if (err) {
      console.log(`Error performing this operation. ${err.stack}`);
      return next(createError(500));
    }
    surveyContext = data.map((survey) => {
      title = survey.title;
      return {
        title: survey.title,
        question1: [
          survey.question1.question,
          survey.question1.option1,
          survey.question1.option2,
          survey.question1.option3,
          survey.question1.option4,
          survey.question1.option5,
        ],
        question2: [
          survey.question2.question,
          survey.question2.option1,
          survey.question2.option2,
          survey.question2.option3,
          survey.question2.option4,
          survey.question2.option5,
        ],
        question3: [
          survey.question3.question,
          survey.question3.option1,
          survey.question3.option2,
          survey.question3.option3,
          survey.question3.option4,
          survey.question3.option5,
        ],
        question4: [
          survey.question4.question,
          survey.question4.option1,
          survey.question4.option2,
          survey.question4.option3,
          survey.question4.option4,
          survey.question4.option5,
        ],
        question5: [
          survey.question5.question,
          survey.question5.option1,
          survey.question5.option2,
          survey.question5.option3,
          survey.question5.option4,
          survey.question5.option5,
        ],
        dateCreated: survey.dateCreated,
      };
    });
  });
  res.render("first-surv", { title, surveyContext });
});

module.exports = router;
