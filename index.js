const express = require('express'); 
const app = express(); 

app.use(express.json());

app.post("/user/signup", (req, res)=>{
    res.json({
        message: 'this is sighup end point'
    })
})
app.post("/user/signin", (req, res)=>{
    res.json({
        message: 'this is sighin end point'
    })
})

app.get ( '/user/purchases' , (req, res)=>{
    res.json({
        message : 'these are all the courses '
    })
})

app.post('/courses/purchase', (req, res)=>{
    res.json({
        message: 'add the courses '
    })
})
app.get('/courses', (req, res)=>{
    res.json({
        message: 'all the courses '
    })
})