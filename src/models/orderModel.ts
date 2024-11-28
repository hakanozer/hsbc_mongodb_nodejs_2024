import mongoose, {Document, Schema} from "mongoose";

export interface IOrder extends Document {
    oid: number
    userId: number
    name: string,
    date: Date
    products: Product
  }
  
  export interface Product {
    pid: number
    title: string
    price: number
  }

  const OrderSchema:Schema<IOrder> = new Schema({
    oid: {type: Number, required: true},
    userId: {type: Number, required: true},
    name: {type: String, required: true},
    date: {type: Date, default: Date.now},
    products: {type: Array<Product> , required: true },
  })

 const Order = mongoose.model<IOrder>('Order', OrderSchema)
 export default Order
