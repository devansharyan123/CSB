const express = require('express');
const app = express();
app.use(express.json());

app.post('/user/login', function(req,res){
   res.json({
    message : "SIGN IN"
   })
})

app.post('/user/signup', function(req,res){
    res.json({
        message : "SIGN UP"
    })

})

app.get('/user/purchases', function(req,res){
   res.json({
       message : "PURCHASES"
   })
})

app.post('/Courses/purchases', function(req,res){
    res.json({
        message : "PURCHASES"
    })
 })

app.get('/Courses', function(req,res){
   res.json({
       message : "COURSES"
   })
})

app.listen(3000);