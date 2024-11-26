import mongoose, {Document, Schema} from "mongoose";

export interface IUser extends Document {
    uid: number,
    name: string,
    email: string,
    password: string,
    date?: Date
}

const UserSchema: Schema = new Schema({
    uid: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date }
})

const User = mongoose.model('User', UserSchema)

export default User