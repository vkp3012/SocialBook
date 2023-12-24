import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config";

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const port = process.env.port

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("MOngoDB is Connected")
        app.listen(port,()=>{
            console.log(`Port is listen ${port}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })