import { Router } from "express";
import authRoute from './Auth/index.js'
const router = Router()

// Auth route
router.use('/auth' , authRoute)

export default router