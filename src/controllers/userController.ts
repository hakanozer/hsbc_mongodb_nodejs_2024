import { Request, Response } from "express";
import { IUser } from "../models/userModel";
import { createUser, loginUser, saveUserAll } from "../services/userService";


export const saveUser = async ( req: Request, res: Response ) => {
    try {
        const user = req.body as IUser
        user.date = new Date()
        const dbUser = await createUser(user);
        res.status(200).json(dbUser)
    } catch (error) {
        const errorObject = {
            status: false,
            message: error
        }
        res.status(500).json(errorObject)
    }
}

export const userLogin = async ( req: Request, res: Response ) => {
    const email = req.body.email
    const password = req.body.password
    const user = await loginUser(email, password)
    try {
        if (user) {
            const u = user as IUser
            if (u.uid) {
                res.status(200).json(u)
            }else {
                res.status(400).json(user)
            }
        }
    } catch (error) {
        res.status(400).json(user)
    }
}

export const saveAllUser = async ( req: Request, res: Response ) => {
    try {
        const userArr = req.body as IUser[]
        const newArr = await saveUserAll(userArr)
        res.status(200).json(newArr)
    } catch (error) {
        const errorObject = {
            status: false,
            message: error
        }
        res.status(500).json(errorObject)
    }
}