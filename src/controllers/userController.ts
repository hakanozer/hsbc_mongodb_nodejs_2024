import { Request, Response } from "express";
import { IUser } from "../models/userModel";
import { allUser, createUser, dateSelect, deleteUser, loginUser, saveUserAll, updateUser } from "../services/userService";
import url from 'url'

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

export const userUpdate = async ( req: Request, res: Response ) => {
    try {
        const user = req.body as IUser
        const updateObj = await updateUser(user)
        res.status(200).json(updateObj)
    } catch (error) {
        const errorObject = {
            status: false,
            message: error
        }
        res.status(500).json(errorObject)
    }
}

// http://localhost:4000/api/users/delete?_id=6746d2ecde73ef8d442fe965
export const userDelete = async ( req: Request, res: Response ) => {
    //const parse = url.parse(req.url, true)
    //const iid = parse.query._id
    const _id = req.body._id
    try {
        const deleteObj = await deleteUser(_id)
        if (deleteObj) {
            res.status(200).json(deleteObj)
        }else {
            const errorObject = {
                status: false,
                message: "Delete Fail: _id:" + _id
            }
            res.status(400).json(errorObject)
        }
    } catch (error) {
        const errorObject = {
            status: false,
            message: error
        }
        res.status(400).json(errorObject)
    }

}


export const userAll = async ( req: Request, res: Response ) => {
    const users = await allUser()
    res.status(200).json(users)
}


// 2 tarih aralığındaki dataları getir
export const userDateSelect = async ( req: Request, res: Response ) => {
    const gteDate = req.body.gte
    const lteDate = req.body.lte
    const users = await dateSelect(gteDate, lteDate)
    res.status(200).json(users)
}