const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connect to mongoDB");
  })
  .catch((error) => {
    console.log("Error connecting");
  });

module.exports = mongoose.connection;
