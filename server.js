import mongoose from 'mongoose';
import tool from './app.js';
import dotenv from 'dotenv';

const {app} = tool
dotenv.config({path:'./config.env'})

let port = process.env.port

mongoose
.connect(process.env.DATABASE_LOCAL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then(()=>console.log(`database connected successfully`))

app.listen(port,()=>console.log(`listening on port ${port}`))

