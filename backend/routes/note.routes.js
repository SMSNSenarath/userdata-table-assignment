//Importing the Router function from the Express framework
const router = require('express').Router();

const Note = require('../models/note.model');

const {verifyToken, verifyTokenAndId} = require('./verifyToken');


//Creating a Note
router.post("/create", verifyToken, async (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        description: req.body.description,
        createdBy: req.user.id
    });
    try{
        const note = await newNote.save();
        res.status(201).json(note);
    }catch(err){
        res.status(500).json(err);
    }
});

//View the user's note list
router.get("/view-all-notes/:id",verifyTokenAndId, async (req,res) =>{
    try{
        const notesOfUser = await Note.find({createdBy: req.params.id});
        res.status(200).json(notesOfUser);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})

module.exports = router;