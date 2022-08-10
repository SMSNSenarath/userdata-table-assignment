//Importing necessary npm libraries
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Creating the Express app
const app = express();

//Importing middlewares to help to parse the incoming request with json payloads
app.use(express.json());

//Enabling cross origin requests for a REST service
app.use(cors());

//Config file for environment variable
dotenv.config();

//Importing routes
const userRoute = require('./routes/user.routes');

//Using routes
app.use("/api/user", userRoute);


//Database connection
mongoose.connect(process.env.MONGO_URL).then(
    () => {
        console.log("MongoDB connected")
    },(err) => {
        console.log("Error!: ", err);
    }
)

//Server initialization
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});

