import express from "express"
import { saveUser, userLogin } from "../controllers/userController"

const userRouter = express.Router()

userRouter.post('/create', saveUser)
userRouter.post('/login', userLogin)

export default userRouter