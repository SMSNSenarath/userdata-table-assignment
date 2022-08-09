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

//Database connection
mongoose.connect(process.env.MONGO_URL).then(
    () => {
        console.log("MongoDB connected")
    },(err) => {
        console.log(err)
    }
)

//Server initialization
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

