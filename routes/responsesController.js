const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const ResponseModel = require("../models/response");
const UserModel = require("../models/user");
const survey = require("../models/survey");
const collect = require("collect");
const options = require("./optionsMapping").options;

const getChecked = (name) => {
  const keys = Object.keys(name);
  const data = [];
  keys.map((item) => {
    if (item === "q1") {
      switch (name.q1) {
        case "option1":
          return data.push({
            ques: "q1",
            key: "option1",
            value: "option1",
            data: name["data-0"],
          });

        case "option2":
          return data.push({
            ques: "q1",
            key: "option2",
            value: "option2",
            data: name["data-0"],
          });

        case "option3":
          return data.push({
            ques: "q1",
            key: "option3",
            value: "option3",
            data: name["data-0"],
          });

        case "option4":
          return data.push({
            ques: "q1",
            key: "option4",
            value: "option4",
            data: name["data-0"],
          });

        case "option5":
          return data.push({
            ques: "q1",
            key: "option5",
            value: "option5",
            data: name["data-0"],
          });

        default:
          break;
      }
    } else if (item === "q2") {
      switch (name.q2) {
        case "option1":
          return data.push({
            ques: "q2",
            key: "option1",
            value: "option1",
            data: name["data-1"],
          });

        case "option2":
          return data.push({
            ques: "q2",
            key: "option2",
            value: "option2",
            data: name["data-1"],
          });

        case "option3":
          return data.push({
            ques: "q2",
            key: "option3",
            value: "option3",
            data: name["data-1"],
          });

        case "option4":
          return data.push({
            ques: "q2",
            key: "option4",
            value: "option4",
            data: name["data-1"],
          });

        case "option5":
          return data.push({
            ques: "q2",
            key: "option5",
            value: "option5",
            data: name["data-1"],
          });

        default:
          break;
      }
    } else if (item === "q3") {
      switch (name.q3) {
        case "option1":
          return data.push({
            ques: "q3",
            key: "option1",
            value: "option1",
            data: name["data-2"],
          });

        case "option2":
          return data.push({
            ques: "q3",
            key: "option2",
            value: "option2",
            data: name["data-2"],
          });

        case "option3":
          return data.push({
            ques: "q3",
            key: "option3",
            value: "option3",
            data: name["data-2"],
          });

        case "option4":
          return data.push({
            ques: "q3",
            key: "option4",
            value: "option4",
            data: name["data-2"],
          });

        case "option5":
          return data.push({
            ques: "q3",
            key: "option5",
            value: "option5",
            data: name["data-2"],
          });

        default:
          break;
      }
    } else if (item === "q4") {
      switch (name.q4) {
        case "option1":
          return data.push({
            ques: "q4",
            key: "option1",
            value: "option1",
            data: name["data-3"],
          });

        case "option2":
          return data.push({
            ques: "q4",
            key: "option2",
            value: "option2",
            data: name["data-3"],
          });

        case "option3":
          return data.push({
            ques: "q4",
            key: "option3",
            value: "option3",
            data: name["data-3"],
          });

        case "option4":
          return data.push({
            ques: "q4",
            key: "option4",
            value: "option4",
            data: name["data-3"],
          });

        case "option5":
          return data.push({
            ques: "q4",
            key: "option5",
            value: "option5",
            data: name["data-3"],
          });

        default:
          break;
      }
    } else if (item === "q5") {
      switch (name.q5) {
        case "option1":
          return data.push({
            ques: "q5",
            key: "option1",
            value: "option1",
            data: name["data-4"],
          });

        case "option2":
          return data.push({
            ques: "q5",
            key: "option2",
            value: "option2",
            data: name["data-4"],
          });

        case "option3":
          return data.push({
            ques: "q5",
            key: "option3",
            value: "option3",
            data: name["data-4"],
          });

        case "option4":
          return data.push({
            ques: "q5",
            key: "option4",
            value: "option4",
            data: name["data-4"],
          });

        case "option5":
          return data.push({
            ques: "q5",
            key: "option5",
            value: "option5",
            data: name["data-4"],
          });

        default:
          break;
      }
    } else if (item === "q6") {
      switch (name.q6) {
        case "option1":
          return data.push({
            ques: "q6",
            key: "option1",
            value: "option1",
            data: name["data-5"],
          });

        case "option2":
          return data.push({
            ques: "q6",
            key: "option2",
            value: "option2",
            data: name["data-5"],
          });

        case "option3":
          return data.push({
            ques: "q6",
            key: "option3",
            value: "option3",
            data: name["data-5"],
          });

        case "option4":
          return data.push({
            ques: "q6",
            key: "option4",
            value: "option4",
            data: name["data-5"],
          });

        case "option5":
          return data.push({
            ques: "q6",
            key: "option5",
            value: "option5",
            data: name["data-5"],
          });

        default:
          break;
      }
    } else if (item === "q7") {
      switch (name.q7) {
        case "option1":
          return data.push({
            ques: "q7",
            key: "option1",
            value: "option1",
            data: name["data-6"],
          });

        case "option2":
          return data.push({
            ques: "q7",
            key: "option2",
            value: "option2",
            data: name["data-6"],
          });

        case "option3":
          return data.push({
            ques: "q7",
            key: "option3",
            value: "option3",
            data: name["data-6"],
          });

        case "option4":
          return data.push({
            ques: "q7",
            key: "option4",
            value: "option4",
            data: name["data-6"],
          });

        case "option5":
          return data.push({
            ques: "q7",
            key: "option5",
            value: "option5",
            data: name["data-6"],
          });

        default:
          break;
      }
    } else if (item === "q8") {
      switch (name.q8) {
        case "option1":
          return data.push({
            ques: "q8",
            key: "option1",
            value: "option1",
            data: name["data-7"],
          });

        case "option2":
          return data.push({
            ques: "q8",
            key: "option2",
            value: "option2",
            data: name["data-7"],
          });

        case "option3":
          return data.push({
            ques: "q8",
            key: "option3",
            value: "option3",
            data: name["data-7"],
          });

        case "option4":
          return data.push({
            ques: "q8",
            key: "option4",
            value: "option4",
            data: name["data-7"],
          });

        case "option5":
          return data.push({
            ques: "q8",
            key: "option5",
            value: "option5",
            data: name["data-7"],
          });

        default:
          break;
      }
    } else if (item === "q9") {
      switch (name.q9) {
        case "option1":
          return data.push({
            ques: "q9",
            key: "option1",
            value: "option1",
            data: name["data-8"],
          });

        case "option2":
          return data.push({
            ques: "q9",
            key: "option2",
            value: "option2",
            data: name["data-8"],
          });

        case "option3":
          return data.push({
            ques: "q9",
            key: "option3",
            value: "option3",
            data: name["data-8"],
          });

        case "option4":
          return data.push({
            ques: "q9",
            key: "option4",
            value: "option4",
            data: name["data-8"],
          });

        case "option5":
          return data.push({
            ques: "q9",
            key: "option5",
            value: "option5",
            data: name["data-8"],
          });

        default:
          break;
      }
    } else if (item === "q10") {
      switch (name.q10) {
        case "option1":
          return data.push({
            ques: "q10",
            key: "option1",
            value: "option1",
            data: name["data-9"],
          });

        case "option2":
          return data.push({
            ques: "q10",
            key: "option2",
            value: "option2",
            data: name["data-9"],
          });

        case "option3":
          return data.push({
            ques: "q10",
            key: "option3",
            value: "option3",
            data: name["data-9"],
          });

        case "option4":
          return data.push({
            ques: "q10",
            key: "option4",
            value: "option4",
            data: name["data-9"],
          });

        case "option5":
          return data.push({
            ques: "q10",
            key: "option5",
            value: "option5",
            data: name["data-9"],
          });

        default:
          break;
      }
    }
  });
  return data;
};

// sanitize the data returned by db
router.post("/survey", async (req, res, next) => {
  if (req.xhr || req.accepts("json")) {
    try {
      if (!req.session.user) {
        res.redirect(303, "/users-login");
      }

      const checked = getChecked(req.body);
      const userEntity = await UserModel.findOne(
        { email: req.session.user.email },
        (err) => {
          if (err) {
            console.log(err.message);
          }
        }
      );

      await ResponseModel.findOne(
        { respondantId: userEntity.getId(req.session.user.email) },
        (err, result) => {
          if (err) {
            console.log(err.message);
          }

          if (result) {
            return res.status(400).json({
              status: "error",
              data: "You have already submitted response on this survey",
            });
          } else {
            new ResponseModel({
              surveyTitle: req.body.surveyTitle,
              surveyNumber: parseInt(req.body.id),
              respondantId: userEntity.getId(req.session.user.email),
              question1: {
                $push: {
                  [question1.options]: {
                    optionName: checked[0].key,
                    value: checked[0].data,
                  },
                },
              },

              question2: {
                options: {
                  optionName: checked[1].key,
                  value: checked[1].data,
                },
              },
              question3: {
                options: {
                  optionName: checked[2].key,
                  value: checked[2].data,
                },
              },
              question4: {
                options: {
                  optionName: checked[3].key,
                  value: checked[3].data,
                },
              },
              question5: {
                options: {
                  optionName: checked[4].key,
                  value: checked[4].data,
                },
              },
              question6: {
                options: {
                  optionName: checked[5].key,
                  value: checked[5].data,
                },
              },
              question7: {
                options: {
                  optionName: checked[6].key,
                  value: checked[6].data,
                },
              },
              question8: {
                options: {
                  optionName: checked[7].key,
                  value: checked[7].data,
                },
              },
              question9: {
                options: {
                  optionName: checked[8].key,
                  value: checked[8].data,
                },
              },
              question10: {
                options: {
                  optionName: checked[9].key,
                  value: checked[9].data,
                },
              },
            }).save((err, result) => {
              if (err) {
                console.log(err.message);
              }
              return res.status(200).json({ status: "success", data: result });
            });
          }
        }
      );
    } catch (e) {
      console.error(e.message);
    }
  }
});

const sanitizeData = [];
router.get("/survey-path", (req, res, next) => {
  const params = req.query;
  const { id, title } = params;
  const { surveyContext } = res.locals;

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
    throw new Error(e.message);
  }
});

router.get("/response", (req, res, next) => {
  const context = options(req, res);
  res.render("response", { layout: "iframe", context });
});

module.exports = router;
