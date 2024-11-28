import { Request, Response } from "express";
import { IPost } from "../models/postModel";
import { savePost } from "../services/postService";

export const postSave = async ( req: Request, res: Response ) => {
    const postObj = req.body as IPost
    const post = await savePost(postObj)
    if (post) {
        res.status(200).json(post)
    }else {
        res.status(400).json("ID Error")
    }
}