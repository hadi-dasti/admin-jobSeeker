
const express = require('express')


require('dotenv').config()

const app = express()
const {PORT} = require('./config')


//middleware
app.use(express.json())

app.use('/admin',require('./router'))


app.listen(PORT,()=> console.log(`start  dashboard panel Admin with port ${PORT}`))

