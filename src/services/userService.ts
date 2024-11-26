import User, { IUser } from '../models/userModel'

export const createUser = async ( user: IUser ) => {
    const dbUser = new User({ 
        uid: user.uid, 
        name: user.name,
        email: user.email,
        password: user.password,
        date: user.date
    })
    return await dbUser.save()
}