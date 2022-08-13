const mongoose = require("mongoose");

//Models that related to Admin user
const User = require("./models/user.model");

//Access environment variables
const dotenv = require("dotenv");
dotenv.config();

//DB Connection
mongoose.connect(process.env.MONGO_URL).then(
  () => {
    console.log("MongoDB connected");
  },
  (err) => {
    console.log("Error!: ", err);
  }
);

//Add the data of the user/users who wants to get access as Admin
const seedAdmins = [
  {
    userId: 9,
    firstName: "Admin",
    lastName: "Mark",
    email: "mark@gmail.com",
    dateOfBirth: "1987-08-08",
    mobile: 94775671271,
    status: true,
    password: "app1234",
    accountType: "admin",
  },
  {
    userId: 10,
    firstName: "Admin",
    lastName: "Gunther",
    email: "gunther@gmail.com",
    dateOfBirth: "1981-08-08",
    mobile: 94775671272,
    status: true,
    password: "app1234",
    accountType: "admin",
  },
];

// DB Query to add Admin users to the database
const seedDB = async () => {
  await User.insertMany(seedAdmins);
};

//Close the DB Connection
seedDB().then(() => {
  mongoose.connection.close();
});

//TO RUN - node seed.js