const mongoose = require("mongoose");

const connectDB = async() => {
  try {
    const mongooseConnection = await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to DB: ${mongooseConnection.connection.host}`)
  } catch (error) {
    console.log(`Unable to connect to DB: ${error}`)
    process.exit(1)
  }
}

module.exports = connectDB