const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwt_secret_adminKey = process.env.jwt_secret_admin;

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decode = jwt.verify(token , jwt_secret_adminKey);
    if(decode){
        req.adminId = decode.id;
        next()

    }
    else{
        res.status(403).json({
            message : "user not found \n"
        })
    }
}

module.exports = {
    adminMiddleware : adminMiddleware
}