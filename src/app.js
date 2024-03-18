import express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";   // user ke broswe pr kuch fat


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"))
app.use(cookieParser());


//! routes import

import userRouter from "./routes/user.routes.js";


// // // routes decleration
app.use("/api/v1/users", userRouter)   // hum api define kar rhe hai isiliye hum bss /user na likh kar /api/v2 likhenge

//// http://localhost:8000/users/register
//// http://localhost:8000/users/login
// http://localhost:8000/api/v1/users/login

export { app }