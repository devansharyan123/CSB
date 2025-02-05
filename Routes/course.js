const { Router } = require('express');
const courseRouter = Router();
const {purchaseModel, courseModel} = require('../db');
const {userMiddleware} = require('../middleware/userMiddleware');

courseRouter.post('/purchase',userMiddleware , async function (req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    const courses = await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message: "You have purchased this course successfully ",
        courses
    })
})

courseRouter.get('/preview', async function (req, res) {
    const course = await courseModel.find({});
    res.json({
        course
    })
})

module.exports = {
    courseRouter: courseRouter
}