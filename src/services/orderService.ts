import Order, { IOrder } from "../models/orderModel";

export const orderSave = async ( order: IOrder ) => {
    const result = new Order(order)
    return await result.save()
}