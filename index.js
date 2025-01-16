const express = require('express');
const app = express();
const {userRouter} = require('./Routes/user');
const {courseRouter} = require('./Routes/course');
const {adminRouter}  = require('./Routes/admin');
require('dotenv').config();
const mongoose = require('mongoose');



app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin",adminRouter);


async function main(){
   
   await mongoose.connect(process.env.MONGO_URI);
   
    app.listen(3000);
    console.log("server running on port 3000")
}

main()

