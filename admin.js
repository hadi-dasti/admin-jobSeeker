
const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()
const {PORT} = require('./config')

// require postgres
const db = require('./configDB')
// console.log(db)
db()

let corsOption = {
    origin :"http://localhost:8080"
}

//middleware
app.use(cors(corsOption))
app.use(express.json())

app.all('*',(req,res)=>{
    return res.status(200).json('hi hadi')
})




app.listen(PORT,()=> console.log(`start  dashboard panel Admin with port ${PORT}`))

