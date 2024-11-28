import { Request, Response } from "express"
import { IOrder } from "../models/orderModel"
import { orderProTileSearch, orderSave } from "../services/orderService"
import url from 'url'

export const saveOrder = async ( req: Request, res: Response ) => {
    const order = req.body as IOrder
    const result = await orderSave(order)
    res.status(200).json(result)
}

export const findProduct = async ( req: Request, res: Response ) => {
    const params = url.parse(req.url, true)
    const title = params.query.title as string
    const result = await orderProTileSearch(title)
    res.status(200).json(result)
}