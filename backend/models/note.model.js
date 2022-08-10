//Importing mongoose library
const mongoose = ('mongoose');

//Creating a note schema
const noteSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    createdBy:  {
        type: mongoose.Schema.Type.ObjectId,
        ref: "User",
    }
}) 

module.exports = mongoose.model("Note", noteSchema);