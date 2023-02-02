const  {Sequelize}  = require('sequelize')
const {POSTGRES,DB_HOST,PASSWORD} = require('./config')



// connect to postgresSql
const sequelize = new Sequelize(POSTGRES, POSTGRES, PASSWORD,{
    host: DB_HOST,
    dialect:'postgres'
});



// exports db admin.js
const  db = async() => {
    try {
        await sequelize.authenticate()
        console.log("Connection has been established successfully.");

    } catch (err) {
        console.log("Unable to connect to the database:", err.name);
    }
}


module.exports = db




