//Importing JWT npm library
const jwt = require('jsonwebtoken');

//Check whether user has the correct access token
const verifyToken = (req, res, next) => {
    const tokenFromHeader = req.headers.token;
    if(tokenFromHeader) {
        jwt.verify(tokenFromHeader, process.env.JWT_SECRET_KEY, (err, user)=>{
            if(err){
                res.status(401).json("Not a valid token");
            }
            req.user = user;
            next();
        });
    }else{
        return res.status(401).json("You are not authenticated"); 
    }
};

//Check whether the user has correct token and correct Id
const verifyTokenAndId = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id){
            next();
        }else{
            res.status(401).json("You are not authorized")
        }
    });
};

module.exports = {verifyToken, verifyTokenAndId};