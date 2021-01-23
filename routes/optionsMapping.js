exports.options = (req, res) => {
  const { id } = req.query;
  console.log(id);
  const { responses } = res.locals;
  const response = responses.find((item) => item.surveyNumber === parseInt(id));

  const mapping = [];
  const questions = {};

  response.question1.options.map((item) => {
    let q1op1 = 0,
      q1op2 = 0,
      q1op3 = 0,
      q1op4 = 0,
      q1op5 = 0;

    if (item.optionName === "option1") {
      q1op1 += 1;
    } else if (item.optionName === "option2") {
      q1op2 += 1;
    } else if (item.optionName === "option3") {
      q1op3 += 1;
    } else if (item.optionName === "option4") {
      q1op4 += 1;
    } else if (item.optionName === "option5") {
      q1op5 += 1;
    }

    questions.q1op1 = q1op1;
    questions.q1op2 = q1op2;
    questions.q1op3 = q1op3;
    questions.q1op4 = q1op4;
    questions.q1op5 = q1op5;
  });

  response.question2.options.map((item) => {
    let q2op1 = 0,
      q2op2 = 0,
      q2op3 = 0,
      q2op4 = 0,
      q2op5 = 0;

    if (item.optionName === "option1") {
      q2op1 += 1;
    } else if (item.optionName === "option2") {
      q2op2 += 1;
    } else if (item.optionName === "option3") {
      q2op3 += 1;
    } else if (item.optionName === "option4") {
      q2op4 += 1;
    } else if (item.optionName === "option5") {
      q2op5 += 1;
    }

    questions.q2op1 = q2op1;
    questions.q2op2 = q2op2;
    questions.q2op3 = q2op3;
    questions.q2op4 = q2op4;
    questions.q2op5 = q2op5;
  });

  response.question3.options.map((item) => {
    let q3op1 = 0,
      q3op2 = 0,
      q3op3 = 0,
      q3op4 = 0,
      q3op5 = 0;

    if (item.optionName === "option1") {
      q3op1 += 1;
    } else if (item.optionName === "option2") {
      q3op2 += 1;
    } else if (item.optionName === "option3") {
      q3op3 += 1;
    } else if (item.optionName === "option4") {
      q3op4 += 1;
    } else if (item.optionName === "option5") {
      q3op5 += 1;
    }

    questions.q3op1 = q3op1;
    questions.q3op2 = q3op2;
    questions.q3op3 = q3op3;
    questions.q3op4 = q3op4;
    questions.q3op5 = q3op5;
  });

  response.question4.options.map((item) => {
    let q4op1 = 0,
      q4op2 = 0,
      q4op3 = 0,
      q4op4 = 0,
      q4op5 = 0;

    if (item.optionName === "option1") {
      q4op1 += 1;
    } else if (item.optionName === "option2") {
      q4op2 += 1;
    } else if (item.optionName === "option3") {
      q4op3 += 1;
    } else if (item.optionName === "option4") {
      q4op4 += 1;
    } else if (item.optionName === "option5") {
      q4op5 += 1;
    }

    questions.q4op1 = q4op1;
    questions.q4op2 = q4op2;
    questions.q4op3 = q4op3;
    questions.q4op4 = q4op4;
    questions.q4op5 = q4op5;
  });

  response.question5.options.map((item) => {
    let q5op1 = 0,
      q5op2 = 0,
      q5op3 = 0,
      q5op4 = 0,
      q5op5 = 0;

    if (item.optionName === "option1") {
      q5op1 += 1;
    } else if (item.optionName === "option2") {
      q5op2 += 1;
    } else if (item.optionName === "option3") {
      q5op3 += 1;
    } else if (item.optionName === "option4") {
      q5op4 += 1;
    } else if (item.optionName === "option5") {
      q5op5 += 1;
    }
    questions.q5op1 = q5op1;
    questions.q5op2 = q5op2;
    questions.q5op3 = q5op3;
    questions.q5op4 = q5op4;
    questions.q5op5 = q5op5;
  });

  response.question6.options.map((item) => {
    let q6op1 = 0,
      q6op2 = 0,
      q6op3 = 0,
      q6op4 = 0,
      q6op5 = 0;

    if (item.optionName === "option1") {
      q6op1 += 1;
    } else if (item.optionName === "option2") {
      q6op2 += 1;
    } else if (item.optionName === "option3") {
      q6op3 += 1;
    } else if (item.optionName === "option4") {
      q6op4 += 1;
    } else if (item.optionName === "option5") {
      q6op5 += 1;
    }

    questions.q6op1 = q6op1;
    questions.q6op2 = q6op2;
    questions.q6op3 = q6op3;
    questions.q6op4 = q6op4;
    questions.q6op5 = q6op5;
  });

  response.question7.options.map((item) => {
    let q7op1 = 0,
      q7op2 = 0,
      q7op3 = 0,
      q7op4 = 0,
      q7op5 = 0;

    if (item.optionName === "option1") {
      q7op1 += 1;
    } else if (item.optionName === "option2") {
      q7op2 += 1;
    } else if (item.optionName === "option3") {
      q7op3 += 1;
    } else if (item.optionName === "option4") {
      q7op4 += 1;
    } else if (item.optionName === "option5") {
      q7op5 += 1;
    }

    questions.q7op1 = q7op1;
    questions.q7op2 = q7op2;
    questions.q7op3 = q7op3;
    questions.q7op4 = q7op4;
    questions.q7op5 = q7op5;
  });

  response.question8.options.map((item) => {
    let q8op1 = 0,
      q8op2 = 0,
      q8op3 = 0,
      q8op4 = 0,
      q8op5 = 0;

    if (item.optionName === "option1") {
      q8op1 += 1;
    } else if (item.optionName === "option2") {
      q8op2 += 1;
    } else if (item.optionName === "option3") {
      q8op3 += 1;
    } else if (item.optionName === "option4") {
      q8op4 += 1;
    } else if (item.optionName === "option5") {
      q8op5 += 1;
    }

    questions.q8op1 = q8op1;
    questions.q8op2 = q8op2;
    questions.q8op3 = q8op3;
    questions.q8op4 = q8op4;
    questions.q8op5 = q8op5;
  });

  response.question9.options.map((item) => {
    let q9op1 = 0,
      q9op2 = 0,
      q9op3 = 0,
      q9op4 = 0,
      q9op5 = 0;

    if (item.optionName === "option1") {
      q9op1 += 1;
    } else if (item.optionName === "option2") {
      q9op2 += 1;
    } else if (item.optionName === "option3") {
      q9op3 += 1;
    } else if (item.optionName === "option4") {
      q9op4 += 1;
    } else if (item.optionName === "option5") {
      q9op5 += 1;
    }
    questions.q9op1 = q9op1;
    questions.q9op2 = q9op2;
    questions.q9op3 = q9op3;
    questions.q9op4 = q9op4;
    questions.q9op5 = q9op5;
  });

  response.question10.options.map((item) => {
    let q10op1 = 0,
      q10op2 = 0,
      q10op3 = 0,
      q10op4 = 0,
      q10op5 = 0;
    if (item.optionName === "option1") {
      q10op1 += 1;
    } else if (item.optionName === "option2") {
      q10op2 += 1;
    } else if (item.optionName === "option3") {
      q10op3 += 1;
    } else if (item.optionName === "option4") {
      q10op4 += 1;
    } else if (item.optionName === "option5") {
      q10op5 += 1;
    }

    questions.q10op1 = q10op1;
    questions.q10op2 = q10op2;
    questions.q10op3 = q10op3;
    questions.q10op4 = q10op4;
    questions.q10op5 = q10op5;
  });
  mapping.push(questions);
  return mapping;
};
