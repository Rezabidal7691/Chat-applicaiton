import { Router } from "express";
import messagesController from "../../Controllers/messagesController.js";
import { protectedRoute } from "../../Middlewares/protectedRoute.js";

const router = Router()

router.post('/send/:receiver' , protectedRoute , messagesController.sendMessage)
router.get('/:receiver' , protectedRoute , messagesController.getMessages)
export default router