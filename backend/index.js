//Importing necessary npm libraries
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Creating the Express app
const app = express();

//Server initialization
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
