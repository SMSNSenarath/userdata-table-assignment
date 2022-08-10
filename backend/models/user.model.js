//Importing mongoose library
const mongoose = require('mongoose');

//Creating a user schema
const userSchema = new mongoose.Schema(
    {
        userId: {type: Number, required: true, unique: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        dateOfBirth: {type: Date, required: true},
        mobile: {type: Number, required: true, unique: true},
        status: {type: Boolean, required: true},
        password: {type: String, required: true},
        accountType: {type: String, required: true}
    }
)



//Exporting the user schema as a model
module.exports = mongoose.model("User", userSchema);