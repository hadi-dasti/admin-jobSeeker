const Admin = require('../model/Admin')
const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY}= require('../config/config')

// setup authorization for role admin
const authAdmin = async(req,res,next)=>{

    const token = req.headers['authorization']

    try{
        if(!token){
           return res.status(401).json({
               success : false,
               msg : 'Unauthorized: Missing token'
           })
        }

        const decode = jwt.verify(token,JWT_SECRET_KEY)

        const admin = await Admin.findOne({where:{id:decode.id}})
            if(!admin){
               return res.status(401).json({
                   success: false,
                   msg : 'Unauthorized: Token is not valid'
               })
            }

        // setup role of model admin
        if(admin.role !== 'MANAGER' && admin.role !== 'EMPLOYEE'){
            return res.status(403).json({
                success:false,
                msg : 'Forbidden: Admin is not authorized'
            })
        }

        // setup manager of model admin
        if(admin.role === 'MANAGER'){
            req.MANAGER = admin
        }

        return next()

    }catch(err){
        return res.status(500).json({
            success : false,
            msg :['Internal Server Error', err.message]
        })
    }

}

module.exports = authAdmin