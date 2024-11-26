import mongoose, {Document, Schema} from "mongoose";

export interface IUser extends Document {
    uid: number,
    name: string,
    email: string,
    password: string,
    date?: Date
}

const UserSchema: Schema = new Schema({
    uid: { type: Number, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    date: { type: Date }
})

const User = mongoose.model('User', UserSchema)

export default User