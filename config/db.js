const mongoose = require("mongoose");
const config = require("../config/production.json");
let db;

if (process.env.NODE_ENV === 'production') {
  db = process.env.MONGODB_URI;
}
else {
  db =  config.mongoURI;
  // db =  config.mongoLocalURI;
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, { 
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false 
    });
    console.log("MongoDB Connected...")
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = connectDB;