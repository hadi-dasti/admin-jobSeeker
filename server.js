
const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()
const {PORT} = require('./config')

// require postgres
const {connectDB,sequelize} = require('./DB')



//middleware
app.use(express.json())

app.use(cors({
        origin:["http://localhost:8080"],
        credentials :true
    })
)


// router Admin
app.use('/admin',require('./router'))




app.listen(PORT,async ()=> {
    console.log(`start  dashboard panel Admin with port ${PORT}`)
    await connectDB();
    sequelize.sync({force:true}).then(()=>{
        console.log("✅Synced database successfully...");
    })

})

