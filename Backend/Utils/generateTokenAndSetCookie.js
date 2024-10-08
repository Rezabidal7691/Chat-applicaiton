import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie  = async(user , res)=>{
    const token = await jwt.sign({userId : user.id } , process.env.TOKEN_SECRET, {expiresIn :'1d'})

    res.cookie('token' , token , {maxAge : 1000 * 60 * 60 * 24 , httpOnly : true , sameSite : 'None' , secure : true})

    return token;
}