import { Router } from "express";
import AuthController from "../../Controllers/AuthController.js";

const router = Router()

router.post('/signup' , AuthController.signup)
router.post('/signin' , AuthController.signin)
router.get('/logout' , AuthController.logout)

export default router