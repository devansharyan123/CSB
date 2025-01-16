const {Router} = require('express');
const courseRouter = Router();

courseRouter.post('/purchase', function(req,res){
    res.json({
        message : "PURCHASES"
    })
 })

courseRouter.get('/preview', function(req,res){
   res.json({
       message : "COURSES"
   })
})

module.exports = {
    courseRouter : courseRouter
}