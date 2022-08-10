//Importing the Router function from the Express framework
const router = require('express').Router();

const User = require('../models/user.model');

//Importing CryptoJS npm library
const CryptoJS = require('crypto-js');

//Importing JWT library
const jwt = require('jsonwebtoken');


//Register User
router.post("/register", async (req, res) => {
    const newUser = new User ({
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        mobile: req.body.mobile,
        status: req.body.status,
        accountType: req.body.accountType,
        //Password encryption using crypto-js
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString(),

    });
    try{
        const user = await newUser.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});


//Login User
router.post("/login", async (req, res) =>{
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json({message: "User not found"});
        
    //Password decryption process from DB
    const decryptedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASSWORD_SECRET_KEY);

    const originalPassword = decryptedPassword.toString(CryptoJS.enc.Utf8);

    if(originalPassword !== req.body.password){
        res.status(401).json({message: "Wrong password"})
    }

    //Creating a token for the User
    const accessToken = jwt.sign(
        {
            userId: user.userId,
            id: user._id,
            accountType: user.accountType
        },
        process.env.JWT_SECRET_KEY,
        {expiresIn : "1d"}
    );

    //Adding access token and decrypted password to the response
    const {password, ...others} = user._doc; 
    
    //Return the response with the access token
    res.status(200).json({...others,accessToken});

    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})

//Get User list
router.get("/view-all", async (req, res) =>{
    try{
        //Add pagination
        const pageSize = 5;
        const page = parseInt(req.query.page || "0");
        const total = await User.countDocuments({});
        const users = await User.find().limit(pageSize).skip(pageSize*page);
        res.json({
            totalPages: Math.ceil(total/pageSize), users
        });
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
    })

//Get one User
router.get("/view-user/:id", async (req, res) => {
    try{
        const user = await User.findOne({userId: req.params.id});
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})



module.exports = router;