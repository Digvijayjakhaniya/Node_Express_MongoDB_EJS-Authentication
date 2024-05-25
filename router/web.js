import express from 'express'
import loginControllers from '../controllers/loginController.js'
const router = express.Router()

router.get('/',loginControllers.index)
router.get('/registration',loginControllers.registration)
router.post('/registration',loginControllers.store)

router.get('/login',loginControllers.login)
router.post('/login',loginControllers.check_login)

export default router