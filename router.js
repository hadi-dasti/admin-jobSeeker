const router = require('express').Router()
const {createTable} =require('./controller')


router.post('/table',createTable)






module.exports= router