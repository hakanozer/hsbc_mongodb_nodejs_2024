import express from "express"
import { 
    reportUser,
    saveAllUser, 
    saveUser, 
    userAll, 
    userDateSelect, 
    userDelete, 
    userLogin, 
    userSearch, 
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
userRouter.get('/search', userSearch)
userRouter.get('/report', reportUser)

export default userRouter