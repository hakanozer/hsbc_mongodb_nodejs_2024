import Order, { IOrder } from "../models/orderModel";

export const orderSave = async ( order: IOrder ) => {
    const result = new Order(order)
    return await result.save()
}

export const orderProTileSearch = async ( title: string ) => {
    const result = await Order.find(
        {
            $or: [
                { "products.title": { $regex: title, $options: 'i' } },
            ]
        },
        //{"products.title":title}
    )
    return result
}