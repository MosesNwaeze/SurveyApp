const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
require("dotenv").config();
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
const connect = mongoose.connect(
  process.env.DB_CONNECTION,
  options,
  (err, connection) => {
    if (err) {
      console.error(`Unable to connect to db ${err.stack}`);
      return;
    }
    console.log(`server connected at ${connection}`);
  }
);
autoIncrement.initialize(mongoose.connection);
module.exports = connect;
