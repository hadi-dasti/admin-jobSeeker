const Admin = require('../model/Admin')
const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY}= require('../config/config')



//create model for Admin
exports.createAdmin = async(req,res)=>{
    try{

    const {userName,email,password,confirmPassword,age,role,published} = req.body;

    // check if passwords match
    if(password !== confirmPassword){
        return res.status(400).json({
            success : false,
            msg :"Passwords do not match"
        })
    }

        const createAdmin =  await Admin.create({
            userName,
            email,
            password:confirmPassword,
            age,
            role,
            published
        })

        const admin = await createAdmin.save()

        if(!admin){
            return res.status(400).json({
                success : false,
                msg :'Invalid input data'
            })
        }

    //send token for Admin
        const token = jwt.sign({id:admin.id},JWT_SECRET_KEY)

        return res.status(201).json({
            success : true,
            data : [admin,token],
            msg : ' successfully create Admin panel model'
        })

    }catch(err){
        console.log(err)
        if(err.name === "SequelizeUniqueConstraintError"){
            return res.status(409).json({
                success : false,
                msg:"Note with that title already exists"
            })
        }

        return res.status(500).json({
            success : false,
            msg : ['internal Server Error ', err.message]
        })
    }
}

// get all model admin
exports.getAllAdmin =(async(req,res)=>{

    try{
        const admin = await Admin.findAll({})

        if(!admin){
            return res.status(400).json({
                success : false,
                msg :'Error not found'
            })
        }

        return res.status(200).json({
            success:true,
            data : {admin},
            results : admin.length,
            description : 'successfully getAll admin'
        })

    }catch(err){
        console.log(err)
        return  res.status(500).json({
            success : false,
            msg:['Internal server Error', err.name]
        })
    }
})

// get one model admin with id
exports.getOneAdmin = async(req,res)=>{

    const {id} =req.params;
    try{
        const admin = await Admin.findByPk(id)

        if(!admin){
           return res.status(404).json({
               success : false,
               msg:'not found model admin with id'
           })
        }

        return res.status(200).json({
            success :true,
            data : [admin],
            msg :'successfully get one admin with id '
        })

    }catch(err){

        return res.status(500).json({
            success :false,
            msg :['Internal Server Error',err.message]
        })
    }

}


// update model admin with patch
exports.updateAdmin = async(req,res)=>{

    const {id} = req.params;
    const {userName,email,password,age,role,published} = req.body;

    try{
        const admins = await Admin.findOne({where:{id}})

        if(!admins){
            return res.status(404).json({
                success:false,
                msg : 'NOT FOUND ADMIN WITH PARAMS ID'
            })
        }

        const updateAdmin = await admins.update({
            userName,email,password,age,role,published
        })

        if(!updateAdmin){
           return res.status(400).json({
                success : false,
               msg : 'Bad request Error'
           })
        }

        return res.status(200).json({
            success : true,
            data :{updateAdmin},
            msg : 'successfully update admin model'
        })

    }catch(err){
        return res.status(500).json({
            success : false,
            msg: ['Internal Server Error',err.message]
        })
    }

}


// delete model admin
exports.deleteAdmin = async(req,res)=>{
    const {id} = req.params

    try{
        const admins = await Admin.destroy({
            where :{id}
        })

        if(!admins){
           return res.status(404).json({
               success : false,
               msg :'Error Not Found Admin with id'
           })
        }

         return res.status(200).json({
             success : true,
             msg :'successfully delete admin with id '
         })

    }catch(err){
        return res.status(500).json({
            success : false,
            msg :['Internal Server Error', err.name]
        })

    }
}