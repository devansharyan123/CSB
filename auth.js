const jwt = requre('jsonwebtoken');
require('dotenv').config();

const jwt_secretKey = process.env.jwt_secret;

function auth(req,res,next){
     
}