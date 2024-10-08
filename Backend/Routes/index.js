import { Router } from "express";

// import routes
import authRoute from './Auth/index.js'
import messageRoute from './Messages/index.js'
const router = Router()

// Auth route
router.use('/auth' , authRoute)

// Message Route
router.use('/message' , messageRoute)
export default router