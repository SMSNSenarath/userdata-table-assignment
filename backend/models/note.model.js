//Importing mongoose library
const mongoose = require('mongoose');

//Creating a note schema
const noteSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}) 

module.exports = mongoose.model("Note", noteSchema)