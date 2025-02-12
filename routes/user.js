import express from 'express'
import { userController , studentController } from '../controllers/index.js';
// khai báo biến router
const router = express.Router();

router.get('/', userController.getAllUser)
router.post('/login', userController.userLogin)
router.post('/register', userController.userRegister)
export default router