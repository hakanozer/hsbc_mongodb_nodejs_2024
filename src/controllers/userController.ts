import { Request, Response } from "express";
import { IUser } from "../models/userModel";
import { createUser } from "../services/userService";


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