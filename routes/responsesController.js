const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const ResponseModel = require("../models/response");
const UserModel = require("../models/user");
const survey = require("../models/survey");

// sanitize the data returned by db
router.post("/survey", (req, res, next) => {
  if (req.xhr || req.accepts("json")) {
    try {
      // before a user can post get id
      ResponseModel.findOne({ surveyNumber: parseInt(req.body.id) })
        .populate("respondantId")
        .exec((err, data) => {
          if (err) {
            console.log("error retrieving an object");
            return next(createError("Internal server error"));
          }
          if (!data.respondantId) {
            new ResponseModel({
              surveyTitle: req.body.title,
              surveyNumber: parseInt(req.body.id),
              respondantId: UserModel._id,
              question1: {
                $push: { option: req.body.q1 },
              },
              question2: {
                $push: { option: req.body.q2 },
              },
              question3: {
                $push: { option: req.body.q3 },
              },
              question4: {
                $push: { option: req.body.q4 },
              },
              question5: {
                $push: { option: req.body.q5 },
              },
              question6: {
                $push: { option: req.body.q6 },
              },
              question7: {
                $push: { option: req.body.q7 },
              },
              question8: {
                $push: { option: req.body.q8 },
              },
              question9: {
                $push: { option: req.body.q9 },
              },
              question10: {
                $push: { option: req.body.q10 },
              },
            }).save((err, result) => {
              if (err) {
                console.log(err);
              }
              console.log(`saved success ${result}`);
              return res.status(200).json({ status: "success", data: result });
            });
          } else {
            return res.status(400).json({
              status: "error",
              data: "You have already submitted response for this survey",
            });
          }
        });
    } catch (e) {
      console.error(`generated error\n ${e.message}`);
    }
  }
});
const sanitizeData = [];
router.get("/survey-path", (req, res, next) => {
  const params = req.query;
  const { id, title } = params;
  const { surveyContext } = res.locals;
  console.log(`id: ${id}, title: ${title}`);
  try {
    const context = {
      surveyData: surveyContext.map((result) => {
        if (result !== "undefined") {
          if (result.surveyNumber === parseInt(id) && result.title === title) {
            return {
              title: result.title,
              dateCreated: result.dateCreated,
              surveyNumber: result.surveyNumber,
              question1: {
                question: result.question1.question,
                option1: result.question1.option1,
                option2: result.question1.option2,
                option3: result.question1.option3,
                option4: result.question1.option4,
                option5: result.question1.option5,
              },
              question2: {
                question: result.question2.question,
                option1: result.question2.option1,
                option2: result.question2.option2,
                option3: result.question2.option3,
                option4: result.question2.option4,
                option5: result.question2.option5,
              },
              question3: {
                question: result.question3.question,
                option1: result.question3.option1,
                option2: result.question3.option2,
                option3: result.question3.option3,
                option4: result.question3.option4,
                option5: result.question3.option5,
              },
              question4: {
                question: result.question4.question,
                option1: result.question4.option1,
                option2: result.question4.option2,
                option3: result.question4.option3,
                option4: result.question4.option4,
                option5: result.question4.option5,
              },
              question5: {
                question: result.question5.question,
                option1: result.question5.option1,
                option2: result.question5.option2,
                option3: result.question5.option3,
                option4: result.question5.option4,
                option5: result.question5.option5,
              },
              question6: {
                question: result.question6.question,
                option1: result.question6.option1,
                option2: result.question6.option2,
                option3: result.question6.option3,
                option4: result.question6.option4,
                option5: result.question6.option5,
              },
              question7: {
                question: result.question7.question,
                option1: result.question7.option1,
                option2: result.question7.option2,
                option3: result.question7.option3,
                option4: result.question7.option4,
                option5: result.question7.option5,
              },
              question8: {
                question: result.question8.question,
                option1: result.question8.option1,
                option2: result.question8.option2,
                option3: result.question8.option3,
                option4: result.question8.option4,
                option5: result.question8.option5,
              },
              question9: {
                question: result.question9.question,
                option1: result.question9.option1,
                option2: result.question9.option2,
                option3: result.question9.option3,
                option4: result.question9.option4,
                option5: result.question9.option5,
              },
              question10: {
                question: result.question10.question,
                option1: result.question10.option1,
                option2: result.question10.option2,
                option3: result.question10.option3,
                option4: result.question10.option4,
                option5: result.question10.option5,
              },
            };
          }
        }
      }),
    };
    context.surveyData.forEach((item, index, arr) => {
      if (item !== undefined) {
        if (sanitizeData) {
          sanitizeData.length = 0;
          sanitizeData.push(item);
        }
      }
    });
    return res.render("survey-temp", {
      layout: "surveys",
      sanitizeData,
      title,
    });
  } catch (e) {
    throw new Error("Unable to perform operation \n" + e.stack);
  }
});

module.exports = router;
