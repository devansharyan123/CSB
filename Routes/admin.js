const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require("../db");


adminRouter.post('/login', function (req, res) {
    res.json({
        message: "SIGN IN"
    })
})

adminRouter.post('/signup', function (req, res) {
    res.json({
        message: "SIGN UP"
    })

})

adminRouter.get('/bulk', function (req, res) {
    res.json({
        message: "SIGN UP"
    })

})

adminRouter.post('/', function (req, res) {
    res.json({
        message: "SIGN UP"
    })

})

adminRouter.put('/', function (req, res) {
    res.json({
        message: "SIGN UP"
    })

})

module.exports = {
    adminRouter : adminRouter
}