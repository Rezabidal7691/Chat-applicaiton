import User from "../Models/User.js";

class UserController{
    async getUsersForSidebar (req, res ,next){
        try {
            const currentUser = req.user._id;
            const filterUsers = await User.find({_id : {$ne : currentUser}}).select('-password')
            res.json(filterUsers)
        } catch (error) {
            next(error)
        }
    }
}

export default new UserController()