import { Router } from "express";

// import routes
import authRoute from './Auth/index.js'
import messageRoute from './Messages/index.js'
import usersRoute from './User/index.js'
const router = Router()

// Auth route
router.use('/auth' , authRoute)

// Message Route
router.use('/message' , messageRoute)
// users route
router.use('/users' , usersRoute)
export default router