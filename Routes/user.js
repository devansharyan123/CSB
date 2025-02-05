const { Router } = require('express');
const userRouter = Router();
const { userModel , courseModel } = require('../db');
const jwt = require('jsonwebtoken');

const {userMiddleware} = require('../middleware/userMiddleware');
const { $in } = require('sift');
require('dotenv').config();
const jwt_secretKey = process.env.jwt_secret;

userRouter.post('/signup', async function (req, res) {

    const { email, password, firstName, lastName } = req.body;
    //hash password
    //use zod for input classification

    try {
        //console.log("reached here \n");
        await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })

        res.json({
            message: "SIGNed IN"
        })
    }
    catch (e) {
        res.json({
            message: "sign in error"
        })
    }



})

userRouter.post('/signin',userMiddleware, async function (req, res) {

    const { email, password } = req.body;
    const user = await userModel.findOne({
        email: email,
        password: password
    })

    //cookie or session based logic here 
    if (user) {
        const token = jwt.sign({
            id: user._id
        }, jwt_secretKey)

        res.json({
            message: token
        })
    }
    else {
        res.json("id not found")
    }


})

userRouter.get('/purchases',userMiddleware, async function (req, res) {
    const userId = req.userId;
    const courses = await purchaseModel.find({
        userId
    })  

    const purchases = await courseModel.find({
        _id : {$in : courses.map(x => x.courseId)}
    })
    res.json({
       courses,
       purchases
    })
})

module.exports = {
    userRouter: userRouter
}