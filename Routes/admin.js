const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require('jsonwebtoken');
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

adminRouter.post('/course', function (req, res) {
    res.json({
        message: "SIGN UP"
    })

})

adminRouter.put('/course', function (req, res) {
    res.json({
        message: "SIGN UP"
    })

})

module.exports = {
    adminRouter: adminRouter
}