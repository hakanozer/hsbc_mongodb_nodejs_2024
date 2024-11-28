import { Request, Response } from "express";
import { IPost } from "../models/postModel";
import { allPost, savePost, userEmailPost } from "../services/postService";

export const postSave = async ( req: Request, res: Response ) => {
    const postObj = req.body as IPost
    const post = await savePost(postObj)
    if (post) {
        res.status(200).json(post)
    }else {
        res.status(400).json("ID Error")
    }
}

export const postAll = async ( req: Request, res: Response ) => {
    const arrPost = await allPost()
    res.status(200).json(arrPost)
}

export const emailUserPost = async ( req: Request, res: Response ) => {
    const email = req.body.email
    const arrPost = await userEmailPost(email)
    res.status(200).json(arrPost)
}