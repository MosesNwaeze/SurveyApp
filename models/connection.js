const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
require("dotenv").config();
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

autoIncrement.initialize(mongoose.connection);
module.exports = {
  startServer: () => {
    mongoose.connect(process.env.DB_CONNECTION, options);
    const connection = mongoose.connection;
    connection.once("open", function () {
      console.log("Connection established successfully");
    });
  },
  shutdownServer: () => {
    mongoose.disconnect((err) => {
      if (err) {
        console.log("Error disconnecting from the server");
      }
      console.log("Db has being disconnected successfully");
    });
  },
};
