const Survey = require("../models/survey");
//const dbServer = require("../models/connection");
const details = [];
const result = [];
try {
  Survey.find({}, (err, data) => {
    if (err) {
      console.log(err.stack);
      throw new Error("500 - Internal server error");
    }
    try {
      const survContext = data.map((result) => {
        details.push({
          surveyNumber: result.surveyNumber,
          surveyTitle: result.surveyTitle,
        });

        return {
          title: result.surveyTitle,
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
      });
      result.push(survContext);
    } catch (e) {
      throw new Error("Unable to perform operation \n" + e.stack);
    }
  });
} catch (error) {
  console.log(error.stack);
} finally {
  //dbServer.shutdownServer();
}

exports.getData = () => result;
exports.getDetails = () => details;
