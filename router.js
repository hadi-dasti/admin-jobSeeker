const router = require('express').Router()
const {createAdmin,getAllAdmin,getOneAdmin} = require('./controller/adminController')


// create router
router
    .route('/create')
    .post(createAdmin)
    .get(getAllAdmin)
router
    .route('/getOne/:id')
    .get(getOneAdmin)











module.exports = router