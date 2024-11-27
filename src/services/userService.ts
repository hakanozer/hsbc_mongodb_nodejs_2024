import User, { IUser } from '../models/userModel'
import bcrypt from 'bcrypt'

export const createUser = async ( user: IUser ) => {
    const newPass = await bcrypt.hash(user.password, 10)
    const dbUser = new User({ 
        uid: user.uid, 
        name: user.name,
        email: user.email,
        password: newPass,
        date: user.date
    })
    return await dbUser.save()
}

export const loginUser = async ( email: string, password: string ) => {
    const userDB = await User.findOne( {email: email} ) 
    if (userDB) {
        const isMatch = await bcrypt.compare(password, userDB.password)
        if (isMatch) {
            return userDB
        }
    }
    return {email, password}
}

export const saveUserAll = async ( userArr: IUser[] ) => {
    for (let i = 0; i < userArr.length; i++) {
        const user = userArr[i];
        const newPass = await bcrypt.hash(user.password, 10)
        user.password = newPass
        user.date = new Date()
    }
    return await User.insertMany(userArr)
}

export const updateUser = async (user: IUser) => {
    const updateUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $set: { uid: user.uid, name: user.name } },
        //{ $set: user },
        { new: true }
    )
    return updateUser
}