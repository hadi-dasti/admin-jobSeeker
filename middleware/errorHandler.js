// exports.errorHandler = (err,req,res,next)=>{
//         const statusCode = res.statusCode ? res.statusCode : 500;
//
//        return res.status(statusCode).json({
//                 message : err.message,
//                 status : process.env.NODE_ENV === 'production' ? null : err.stack
//         })
//
// }


exports.errorHandler = (err,req,res,next)=>{
    const statusCode = 500
    console.error(...err)

    try{
        if(statusCode){
          return res.status(statusCode).json({
              success: false,
              msg: err.name
          })
        }

        if(process.env.NODE_ENV === 'production'){
            return res.status(500).json({
                success: false,
                msg: err.stack
            })
        }

        return next()

    }catch(error){
        console.log(error.message)
    }

}

