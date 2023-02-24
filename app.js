const express = require('express')
const { connectToDb, getDb } = require('./db')

const app = express()

// db connection
let db 
connectToDb((err)=>{
    if(!err){
        app.listen(3000, ()=>{
            console.log("connected to mondodb on port 3000")
        }) 
        db = getDb()
    }
})

app.get("/", (req,res)=>{
    res.json({mssg: "Welcome to the api"})
})