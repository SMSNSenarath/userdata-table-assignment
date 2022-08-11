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

//View a single user note
router.get("/view-note/:id/:noteId",verifyTokenAndId, async (req,res) => {
    try{
        const note = await Note.findById(req.params.noteId);
        res.status(200).json(note);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})

//View the user's note list
router.get("/view-all-notes/:id",verifyTokenAndId, async (req,res) =>{
    try{
        //Add pagination
        const pageSize = 5;
        const page = parseInt(req.query.page || "0");
        const total = await Note.countDocuments({});
        const notesOfUser = await Note.find({createdBy: req.params.id}).limit(pageSize).skip(pageSize*page);
        res.json({
            totalPages: Math.ceil(total/pageSize), notesOfUser
        });
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
});

//Update the Note
router.put("/update/:id/:noteId", verifyTokenAndId, async (req, res) =>{
    try{
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.noteId,
            {$set: req.body},
            {new: true}
            );
            res.status(200).json(updatedNote);
            // res.status(200).json({message:"Note updated successfully!"})
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

//Delete the Note
router.delete("/delete/:id/:noteId", verifyTokenAndId, async (req,res) => {
    try{
        await Note.findByIdAndDelete(req.params.noteId);
        res.status(200).json({message: "Note deleted successfully!"});
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;