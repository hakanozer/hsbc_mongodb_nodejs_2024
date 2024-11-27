import express from "express"
import { saveAllUser, saveUser, userLogin, userUpdate } from "../controllers/userController"

const userRouter = express.Router()

userRouter.post('/create', saveUser)
userRouter.post('/login', userLogin)
userRouter.post('/createall', saveAllUser)
userRouter.put('/update', userUpdate)

export default userRouter