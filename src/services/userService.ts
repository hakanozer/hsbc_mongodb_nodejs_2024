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