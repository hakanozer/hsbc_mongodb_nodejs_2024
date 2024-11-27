import express from "express"
import { saveAllUser, saveUser, userLogin } from "../controllers/userController"

const userRouter = express.Router()

userRouter.post('/create', saveUser)
userRouter.post('/login', userLogin)
userRouter.post('/createall', saveAllUser)
userRouter.put('/update', saveAllUser)

export default userRouter