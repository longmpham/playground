const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config({ path: "./config/config.env" });
const port = process.env.PORT || 4001;
app.use(cors());
app.use(express.json());

// Connect to MongoDB using Mongoose
const connectDB = require("./config/db.js");
connectDB();

// ROUTES
const pickuplineRoute = require("./routes/pickuplines.js")
const userRoute = require("./routes/users.js")
app.use("/pickuplines", pickuplineRoute)
app.use("/users", userRoute)


app.get('/', (req, res) => {
  res.status(200).send('Hello world!')
  res.status(200).json(
    {
      message: "hello"
    }  
  )
})
// create a route for logins 

app.listen(port, () => console.log(`Server running on port ${port}`));