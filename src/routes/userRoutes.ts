import express from "express"
import { 
    saveAllUser, 
    saveUser, 
    userAll, 
    userDateSelect, 
    userDelete, 
    userLogin, 
    userUpdate 
} from "../controllers/userController"

const userRouter = express.Router()

userRouter.post('/create', saveUser)
userRouter.post('/login', userLogin)
userRouter.post('/createall', saveAllUser)
userRouter.put('/update', userUpdate)
userRouter.delete('/delete', userDelete)
userRouter.get('/allUser', userAll)
userRouter.post('/userDate', userDateSelect)

export default userRouter