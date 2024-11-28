import mongoose, {Document, Schema} from "mongoose";

export interface IPost extends Document {
    title: string,
    content: string,
    userId: mongoose.Types.ObjectId,
    createdAt: Date
}

const PostSchema:Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
})

const Post = mongoose.model<IPost>('Post', PostSchema)
export default Post