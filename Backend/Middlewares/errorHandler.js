
const responseErrorHandler = (err , req , res , next)=>{
    const statusCode = err.statusCode || 400;
    return res.status(statusCode).json({status : 'error' , messages : err.message})
}

const pathErrorHandler = (req ,res , next)=>{
    const error = new Error('مسیر وب سرویس نامعتبر است')
    error.statusCode = 404;
    next(error)
}


export {
    pathErrorHandler ,
    responseErrorHandler
}