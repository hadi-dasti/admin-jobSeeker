require('dotenv').config()
const {DataTypes,Sequelize} = require('sequelize')
const {POSTGRES,DB_HOST,PASSWORD} = require('./config')



// connect to postgresSql

const sequelize = new Sequelize(POSTGRES, POSTGRES,PASSWORD,{
        host: DB_HOST,
        dialect:'postgres',
        logging: false
    })

async function connectDB(){
    try{
        await sequelize.authenticate()
        console.log("✅ Connection has been established successfully.");
    }catch(err){
        console.error("Unable to connect to the database:", err.name);
    }
}


module.exports = {connectDB,DataTypes,sequelize, Sequelize}




