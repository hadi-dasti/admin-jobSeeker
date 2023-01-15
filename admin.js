require('dotenv').config({})
const express = require('express')

const app = express()


//middleware
app.use(express.json())




app.listen(3000,()=> console.log('start  dashboard panel Admin'))

