const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require('jsonwebtoken');
const adminMiddleware = require('../middleware/adminMiddleware');
require('dotenv').config();
const jwt_secretKey = process.env.jwt_secret_admin;


adminRouter.post('/signup', async function (req, res) {
    const { email, password, firstName, lastName } = req.body;
    //hash password
    //use zod for input classification

    try {
        //console.log("reached here \n");
        await adminModel.create({
            email,
            password,
            firstName,
            lastName
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

adminRouter.post('/signin', async function (req, res) {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    //cookie or session based logic here 
    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, jwt_secretKey)

        res.json({
            message: token
        })
    }
    else {
        res.json("id not found")
    }

})

adminRouter.get('/course/bulk', function (req, res) {
    res.json({
        message: "SIGN UP"
    })

})

adminRouter.post('/course', adminMiddleware, function (req, res) {
    const { title, description, imageUrl, price, creatorId } = req.body;
    try {
        const course = courseModel.create({
            title,
            description,
            imageUrl, // watch creating a web 3 saas in 6 hrs by harkirat to learn how to upload a direct image in database without using url
            price,
            creatorId: adminId
        })

        res.json({
            message: "Course created",
            courseId: course._id
        })
    } catch (e) {
        res.json({
            message: "Course error"
        })
    }

})

adminRouter.put('/course', function (req, res) {
    res.json({
        message: "SIGN UP"
    })

})

module.exports = {
    adminRouter: adminRouter
}