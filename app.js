const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const capture = require("./routes/surveyCapture");
const testData = require("./routes/testData");

//const questions = require("./routes/questionHelper");
const handlebars = require("express3-handlebars").create({
  defaultLayout: "main",
  helpers: {
    section: function (name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    },
  },
});
require("dotenv").config();
//const bodyParser = require('body-parser');

const app = express();

// Route declarations
const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const responsesController = require("./routes/responsesController");

// view engine setup
app.engine("handlebars", handlebars.engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("cookie-parser")(process.env.COOKIE_SECRET));
// Handle db persistence for session
app.use(
  require("express-session")({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 60000 },
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  //const getQuestions = questions(req,res);
  const surveyContext = capture.getData().flat(2);
  const details = capture.getDetails();
  res.locals.surveyContext = surveyContext;
  res.locals.details = details;
  //res.locals.questions = getQuestions;
  next();
});

// Route usage
app.use(indexRouter);
app.use(userRouter);
app.use(adminRouter);
app.use(responsesController);
//app.use(testData);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  //next(createError(404));
  res.render("404", { layout: null });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  const title = "Error page";
  res.render("errors/error", { title, layout: "error" });
});

module.exports = app;
