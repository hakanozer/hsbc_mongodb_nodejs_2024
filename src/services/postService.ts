import Post, { IPost } from "../models/postModel";

export const savePost = async ( post: IPost ) => {
    try {
        const postDb = new Post(post)
        return await postDb.save()
    } catch (error) {
        return null
    }
}