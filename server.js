require('dotenv').config()
const express = require('express')
const cors = require('cors')
const color = require('colors')
const swaggerDoc = require('./utile/swagger')
// const swaggerDocument = require('./swagger.JSON');
const {errorHandler} = require('./middleware/errorHandler')

//setup application
const app = express()

// setup port of config
const {PORT} = require('./config/config')


// setup postgresql and connect to db with sequelize
const {connectDB,sequelize} = require('./config/dbSql')

const coreOption ={
    origin:["http://localhost:80"]
}

//middleware
app.use(cors(coreOption))

//parse request of content-type - application/json
app.use(express.json())

// parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}))




// router Admin
app.use('/api/admin',require('./routes/router'))


// setup global error handler
app.use(errorHandler)


// setup application
app.listen(PORT,async ()=> {

    try{
        // running main app
        console.log(`start dashboard panel Admin with port ${PORT}`.white)

        //setup and running swaggerDocument
        await swaggerDoc(app)
        console.log(`start swagger in api with port :${PORT}`.blue)


        //connect database
        await connectDB();


        // Generated table
        await sequelize.sync({force:true})
        console.log("✅Synced database successfully...".red);

    }catch(err){
        console.log(err.messageerror)
    }
})

