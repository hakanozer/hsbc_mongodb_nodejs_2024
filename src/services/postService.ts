import { match } from "assert";
import Post, { IPost } from "../models/postModel";

export const savePost = async ( post: IPost ) => {
    try {
        const postDb = new Post(post)
        return await postDb.save()
    } catch (error) {
        return null
    }
}

export const allPost = async () => {
    const arrPost = await Post.find().populate({path: 'userId', select:["name", "email"]}).select(["title", "content"])
    return arrPost
}



export const userEmailPost = async (email: string) => {
    const arrPost = (await Post.find().populate({path: 'userId', match: { email: email } })).filter(item => item.userId !== null)
    return arrPost
}
