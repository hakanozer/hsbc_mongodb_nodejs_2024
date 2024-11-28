import express from "express"
import { emailUserPost, postAll, postSave } from "../controllers/postController"

const postRouter = express.Router()

postRouter.post('/create', postSave)
postRouter.get('/list', postAll)
postRouter.post('/emailPost', emailUserPost)

export default postRouter