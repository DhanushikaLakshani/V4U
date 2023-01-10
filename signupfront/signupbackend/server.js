require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const routesUrls = require('./routes/routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

mongoose.connect(process.env.DATABASE_ACCESS)
    .then(()=>{
        app.listen(5000, () => console.log("server is up and running"))
    })
    .catch((err)=>{
        console.error({error: err.message});
    })




