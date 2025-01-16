const { Router } = require('express');
const userRouter = Router();

userRouter.post('/login', function (req, res) {
    res.json({
        message: "SIGN IN"
    })
})

userRouter.post('/signup', function (req, res) {
    res.json({
        message: "SIGN UP"
    })

})

userRouter.get('/purchases', function (req, res) {
    res.json({
        message: "PURCHASES"
    })
})

module.exports = {
    userRouter: userRouter
}