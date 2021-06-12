const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const databaseUrl = process.env.MONGODB_URL;

module.exports = mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
