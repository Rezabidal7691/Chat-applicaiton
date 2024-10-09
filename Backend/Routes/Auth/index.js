import { Router } from "express";
import AuthController from "../../Controllers/AuthController.js";
import { protectedRoute } from "../../Middlewares/protectedRoute.js";

const router = Router()

router.post('/signup' , AuthController.signup)
router.post('/signin' , AuthController.signin)
router.get('/profile', protectedRoute , AuthController.getCurrentUser)
router.get('/logout' , AuthController.logout)

export default router