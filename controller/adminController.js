const Admin = require('../model/Admin')





exports.createAdmin = async(req,res)=>{

    const {userName,email,password,age,role,published} = req.body;

    try{
        const createAdmin =  await Admin.create({
            userName,
            email,
            password,
            age,
            role,
            published
        })

        const admin = await createAdmin.save()

        if(!admin){
            return res.status(404).json({
                success : false,
                msg :'not Found Error'
            })
        }

        return res.status(201).json({
            success : true,
            data : [admin],
            msg : 'create model Admin successfully'
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
            msg : 'successfully getAll admin'
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
            success : false,
            data : [admin],
            msg :'successfully get on admin with id '
        })

    }catch(err){

        return res.status(500).json({
            success :false,
            msg :['Internal Server Error',err.message]
        })
    }

}