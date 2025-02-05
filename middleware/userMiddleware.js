const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwt_secret_userKey = process.env.jwt_secret_user;

function userMiddleware(req,res,next){
    const decode = jwt.verify(token , jwt_secret_userKey);
    if(decode){
        req.userId = decode.id;
        next()
    }
    else{
        res.status(403).json({
            message : "You are not signed in \n"
        })
    }
}

module.exports = {
    userMiddleware : userMiddleware
}