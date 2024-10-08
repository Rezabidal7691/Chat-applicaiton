import User from "../Models/User.js";
import { generateTokenAndSetCookie } from "../Utils/generateTokenAndSetCookie.js";
import bcrypt from 'bcrypt'
class AuthController  {
    async signup (req ,res , next){
        try {
            const {fullname , username , password } = req.body;
            if(!fullname || !username || !password) {
                return res.status(400).json({status : 'error' , message : "همه فیلد ها الزامی هستند"})
            }
            if(fullname.length <  5 ) {
                return res.status(400).json({status : 'error' , message : "طول نام کامل شما نباید از  5 کاراکتر کمتر باشد"})
            }
            if(username.length < 3 ) {
                return res.status(400).json({status : 'error' , message : "طول نام کاربری شما نباید از  3 کاراکتر کمتر باشد"})
            }
            if(password.length < 6 ) {
                return res.status(400).json({status : 'error' , message : "طول گذرواژه نباید از 6 کاراکتر کمتر باشد"})
            }
            const existsUser = await User.findOne({username})
            if(existsUser) {
                return res.status(400).json({status : 'error' , message :"نام کاربری نامعتبر است"})
            }
            const hashPassword = await bcrypt.hash(password , 10)
            const newUser = new User({
                fullname,
                username,
                password : hashPassword, 
            })
            const token = await generateTokenAndSetCookie(newUser , res)
            await newUser.save();
            res.json({status :'success' , user : { id : newUser._id  , fullname : newUser.fullname , username : newUser.username , avatar : newUser.avatar , token }})
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    async signin (req ,res , next){
        try {
            const {username , password } = req.body;
            if( !username || !password) {
                return res.status(400).json({status : 'error' , message : "همه فیلد ها الزامی هستند"})
            }
            if(username.length < 3 ) {
                return res.status(400).json({status : 'error' , message : "طول نام کاربری شما نباید از  3 کاراکتر کمتر باشد"})
            }
            if(password.length < 6 ) {
                return res.status(400).json({status : 'error' , message : "طول گذرواژه نباید از 6 کاراکتر کمتر باشد"})
            }
            const user = await User.findOne({username})
            if(!user) {
                return res.status(404).json({status : 'error' , message :"کابری یافت نشد"})
            }
            const comparePassword = await bcrypt.compare(password , user.password )
            if(!comparePassword ){
                return res.status(400).json({status : 'error' , message :"نام کاربری یا رمز عبور صحیح نیست"})
            }
            const token = await generateTokenAndSetCookie(user , res)
            res.json({status :'success' , user : { id : user._id  , fullname : user.fullname , username : user.username , avatar : user.avatar , token }})
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    async logout (req, res ,next){
        try {
            res.clearCookie('token')
            res.json({status : 'success' , message :"عملیات خروج با موفقیت انجام شد"})
        } catch (error) {
            next(error)
        }
    }
}

export default new AuthController()