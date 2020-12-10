const router = require("express").Router();
require("../models/connection");
const { Schema } = require("mongoose");
const Survey = require("../models/survey");
const mongoose = require("mongoose");

router.get("/surveys", (req, res, next) => {
  new Survey({
    surveyTitle: "About you",
    _id: new mongoose.Types.ObjectId(),// used to create an instance of id
    question1: {
      question: "Best food?",
      option1: "Interesting",
      option2: "Love it",
      option3: "Full of surprises",
      option4: "Bulled",
      option5: "Not memorable",
    },
    question2: {
      question: "What always stick in your head about child hood",
      option1: "family experiences",
      option2: "Friends experiences",
      option3: "Not something to talk about",
      option4: "It hell",
      option5: "All the same",
    },
    question3: {
      question: "Where did you learnt it?",
      option1: "friend",
      option2: "Youtube",
      option3: "online books",
      option4: "Community post",
      option5: "In collage ",
    },
    question4: {
      question: "What was your greatest challenge?",
      option1: "too many libraries to learn",
      option2: "Not enough examples",
      option3: "Lesson were jampacked ",
      option4: "Book too long",
      option5: "too many forgetfulness ",
    },
    question5: {
      question: "What was your greatest motivation?",
      option1: "It pays alot",
      option2: "I dont have to work for any body",
      option3: "I love coding",
      option4: "i want to excel in IT",
      option5: "It my hobby",
    },
    question6: {
      question: "Did u ever thought of letting go?",
      option1: "yes",
      option2: "no",
      option3: "not sure",
      option4: "maybe",
      option5: "yes maybe no",
    },
    question7: {
      question: "Did it makes you anti social?",
      option1: "yes",
      option2: "No",
      option3: "not sure",
      option4: "maybe ye",
      option5: "maybe no ",
    },
    question8: {
      question: "Did it made you to avoid food?",
      option1: "yes",
      option2: "No",
      option3: "not sure",
      option4: "maybe ye",
      option5: "maybe no ",
    },
    question9: {
      question: "Did you regret all the time you put in it?",
      option1: "yes",
      option2: "No",
      option3: "not sure",
      option4: "maybe ye",
      option5: "maybe no ",
    },
    question10: {
      question: "Did you succeed?",
      option1: "yes",
      option2: "No",
      option3: "not sure",
      option4: "maybe ye",
      option5: "maybe no ",
    },
  })
  .save((err, data)=>{
      if(err) console.log(err);

      console.log(data)
  });
});
module.exports = router;
