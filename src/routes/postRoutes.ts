import express from "express"
import { postSave } from "../controllers/postController"

const postRouter = express.Router()

postRouter.post('/create', postSave)

export default postRouter