module.exports = async(req, res) => {
	const questions = [];
	console.log(req.session.sanitizedData);
	const sanitizedData = await req.session.sanitizedData;
  try {
    if (!sanitizedData) {
      console.log("No data");
		}
		console.log(sanitizedData.length);
    sanitizedData.map((item) => {
      //console.log(item);
      switch (item) {
        case item.question1: {
          questions.push({ question1: item.question1.questions });
          break;
        }
        case item.question2: {
          questions.push({ question2: item.question2.questions });
          break;
        }
        case item.question3: {
          questions.push({ question3: item.question3.questions });
          break;
        }
        case item.question4: {
          questions.push({ question4: item.question4.questions });
          break;
        }
        case item.question5: {
          questions.push({ question5: item.question5.questions });
          break;
        }
        case item.question6: {
          questions.push({ question6: item.question6.questions });
          break;
        }
        case item.question7: {
          questions.push({ question7: item.question7.questions });
          break;
        }
        case item.question8: {
          questions.push({ question8: item.question8.questions });
          break;
        }
        case item.question9: {
          questions.push({ question9: item.question9.questions });
          break;
        }
        case item.question10: {
          questions.push({ question10: item.question10.questions });
          break;
        }
        default: {
          console.log("unknown data source");
          break;
        }
      }
    });
  } catch (e) {
    console.log(e);
  }

  return questions;
};
