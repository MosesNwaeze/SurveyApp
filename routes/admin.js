const createHttpError = require("http-errors");
const router = require("express").Router();
const Admin = require("../models/admin");
const Survey = require("../models/survey");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

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

      if (req.session) {
        req.session.user = {};
        req.session.user.name = data.firstName + " " + data.lastName;
      }
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

router.post("/admin/create-survey", (req, res, next) => {
  Survey.findOne({ surveyTitle: req.body.surveyTitle }, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (!data) {
      // insert into survey
      new Survey({
        _id: new mongoose.Types.ObjectId(),
        surveyTitle: req.body.surveyTitle,
        question1: {
          question: req.body.q1,
          option1: req.body.q1opt1,
          option2: req.body.q1opt2,
          option3: req.body.q1opt3,
          option4: req.body.q1opt4,
          option5: req.body.q1opt5,
        },
        question2: {
          question: req.body.q2,
          option1: req.body.q2opt1,
          option2: req.body.q2opt2,
          option3: req.body.q2opt3,
          option4: req.body.q2opt4,
          option5: req.body.q2opt5,
        },
        question3: {
          question: req.body.q3,
          option1: req.body.q3opt1,
          option2: req.body.q3opt2,
          option3: req.body.q3opt3,
          option4: req.body.q3opt4,
          option5: req.body.q3opt5,
        },
        question4: {
          question: req.body.q4,
          option1: req.body.q4opt1,
          option2: req.body.q4opt2,
          option3: req.body.q4opt3,
          option4: req.body.q4opt4,
          option5: req.body.q4opt5,
        },
        question5: {
          question: req.body.q5,
          option1: req.body.q5opt1,
          option2: req.body.q5opt2,
          option3: req.body.q5opt3,
          option4: req.body.q5opt4,
          option5: req.body.q5opt5,
        },
        question6: {
          question: req.body.q6,
          option1: req.body.q6opt1,
          option2: req.body.q6opt2,
          option3: req.body.q6opt3,
          option4: req.body.q6opt4,
          option5: req.body.q6opt5,
        },
        question7: {
          question: req.body.q7,
          option1: req.body.q7opt1,
          option2: req.body.q7opt2,
          option3: req.body.q7opt3,
          option4: req.body.q7opt4,
          option5: req.body.q7opt5,
        },
        question8: {
          question: req.body.q8,
          option1: req.body.q8opt1,
          option2: req.body.q8opt2,
          option3: req.body.q8opt3,
          option4: req.body.q8opt4,
          option5: req.body.q8opt5,
        },
        question9: {
          question: req.body.q9,
          option1: req.body.q9opt1,
          option2: req.body.q9opt2,
          option3: req.body.q9opt3,
          option4: req.body.q9opt4,
          option5: req.body.q9opt5,
        },
        question10: {
          question: req.body.q10,
          option1: req.body.q10opt1,
          option2: req.body.q10opt2,
          option3: req.body.q10opt3,
          option4: req.body.q10opt4,
          option5: req.body.q10opt5,
        },
      }).save((err, data) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            data: "500 - Internal server Error",
          });
        }
        return res.status(200).json({
          status: "success",
          data: data,
        });
      });
    }
  });
});

router.get("/admin", function (req, res, next) {
  const initKey = req.session.initKey;
  const user = req.session.user;
  const title = `Admin panel - restricted area `;
  res.render("admin/admin", {
    layout: "admin",
    title,
    initKey,
    user,
  });
});

router.get("/admin/delete-survey",(req, res, next)=>{
  const id = req.query.id;
  Survey.remove({surveyNumber: parseInt(id)},(err)=>{
    if(err){
      console.log(err);
    }
    return res.status(200).json({
      status: "success",
      data: "Removed successfully"
    });
  });
});

router.get("/admin/dashboard", (req, res, next) => {
  const title = "admin dashboard";
  res.render("admin/dashboard", { layout: "admin", title });
});

router.get("/admin/create-survey", (req, res, next) => {
  res.render("admin/create", { layout: "admin" });
});

router.get("/admin/view-surveys", (req, res, next) => {
  try {
    Survey.find({}, (err, data) => {
      if (err) {
        console.log(err);
      }

      const context = data.map((item) => {
        return {
          _id: item.ObjectId,
          surveyTitle: item.surveyTitle,
          surveyNumber: item.surveyNumber,
          question1: {
            question: item.question1.question,
            option1: item.question1.option1,
            option2: item.question1.option2,
            option3: item.question1.option3,
            option4: item.question1.option4,
            option5: item.question1.option5,
          },
          question2: {
            question: item.question2.question,
            option1: item.question2.option1,
            option2: item.question2.option2,
            option3: item.question2.option3,
            option4: item.question2.option4,
            option5: item.question2.option5,
          },
          question3: {
            question: item.question3.question,
            option1: item.question3.option1,
            option2: item.question3.option2,
            option3: item.question3.option3,
            option4: item.question3.option4,
            option5: item.question3.option5,
          },
          question4: {
            question: item.question4.question,
            option1: item.question4.option1,
            option2: item.question4.option2,
            option3: item.question4.option3,
            option4: item.question4.option4,
            option5: item.question4.option5,
          },
          question5: {
            question: item.question5.question,
            option1: item.question5.option1,
            option2: item.question5.option2,
            option3: item.question5.option3,
            option4: item.question5.option4,
            option5: item.question5.option5,
          },
          question6: {
            question: item.question6.question,
            option1: item.question6.option1,
            option2: item.question6.option2,
            option3: item.question6.option3,
            option4: item.question6.option4,
            option5: item.question6.option5,
          },
          question7: {
            question: item.question7.question,
            option1: item.question7.option1,
            option2: item.question7.option2,
            option3: item.question7.option3,
            option4: item.question7.option4,
            option5: item.question7.option5,
          },
          question8: {
            question: item.question8.question,
            option1: item.question8.option1,
            option2: item.question8.option2,
            option3: item.question8.option3,
            option4: item.question8.option4,
            option5: item.question8.option5,
          },
          question9: {
            question: item.question9.question,
            option1: item.question9.option1,
            option2: item.question9.option2,
            option3: item.question9.option3,
            option4: item.question9.option4,
            option5: item.question9.option5,
          },
          question10: {
            question: item.question10.question,
            option1: item.question10.option1,
            option2: item.question10.option2,
            option3: item.question10.option3,
            option4: item.question10.option4,
            option5: item.question10.option5,
          },
          dateCreated:
            item.dateCreated.getDate() +
            "-" +
            item.dateCreated.getMonth() +
            "-" +
            item.dateCreated.getFullYear(),
        };
      });
      res.render("admin/view", { layout: "admin",context });
    });
  } catch (e) {
    console.error(e);
  }
});
module.exports = router;
