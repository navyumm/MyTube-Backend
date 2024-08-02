// require('dotenv').config({path: "./.env"})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080, ()=>{
        console.log(`⚙️  server is running at PORT : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONG db connection failed !!!", err)
})



/*
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️   Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// }) */











/*
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants";

// // function connectDB(){}
//// connectDB()
//?// first apporach 
import express from "express";
const app = express()

;( async () => {
    try{
        await mongoose.connect(`${process.env.
        MONGODB_URI}/${ DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERROR: ", error);
            throw err
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port 
            ${process.env.PORT}`)
        })

    } catch(error) {
        console.error("ERROR: ", error);
        throw err
    }
})()
*/