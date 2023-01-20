const {Client} = require('pg')
const {POSTGRES,PG,LOCALHOST,PASSWORD} = require('./config')

const postgresDb = ()=>{
    try{
        const client =  new Client({
            user :POSTGRES,
            port :PG,
            host :LOCALHOST,
            database :POSTGRES,
            password :PASSWORD
        })
        client.connect();
        console.log('connect on postgres  database')
    }catch(err){
        console.log(err)
    }
}

module.exports = postgresDb