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
        // { $set: { uid: user.uid, name: user.name, email: user.email } },
        { $set: user },
        { new: true }
    )
    return updateUser
}

export const deleteUser = async (_id: string) => {
    const deleteUser = await User.findOneAndDelete({ _id: _id })
    if (deleteUser) {
        return deleteUser
    }
    return null
}

export const allUser = async () => {
    const users = await User.find()
    return users
}

export const dateSelect = async ( startDate: Date, endDate: Date ) => {
    const users = await User.find({
        date: { $gte: startDate, $lte: endDate }
    })
    return users
}

export const search = async ( searchTerm: string, skip: number ) => {

    const query = {
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { email: { $regex: searchTerm, $options: 'i' } },
        ],
        $and: [
            { uid: { $lte: 90000 } }
        ]
    }
    const userArr = await User.find(query)
    .skip(skip)
    .limit(10)

    const userCount = await User.countDocuments(query)

    return {count: userCount, result: userArr}
}
