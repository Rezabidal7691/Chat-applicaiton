import { Router } from "express";
import { protectedRoute } from "../../Middlewares/protectedRoute.js";
import userController from "../../Controllers/userController.js";

const router = Router()

router.get('/' , protectedRoute , userController.getUsersForSidebar)

export default router