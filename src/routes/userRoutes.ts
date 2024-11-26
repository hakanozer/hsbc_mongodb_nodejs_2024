import express from "express"
import { saveUser } from "../controllers/userController"

const userRouter = express.Router()

userRouter.post('/create', saveUser)

export default userRouter