import { Request, Response } from "express"
import { IOrder } from "../models/orderModel"
import { orderSave } from "../services/orderService"

export const saveOrder = async ( req: Request, res: Response ) => {
    const order = req.body as IOrder
    const result = await orderSave(order)
    res.status(200).json(result)
}