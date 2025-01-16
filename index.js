const express = require('express');
const app = express();
const {userRouter} = require('./Routes/user')
const {courserouter} = require('./Routes/course')

app.use("/user",userRouter);
app.use("/course", courserouter)




app.listen(3000);