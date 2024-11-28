import express from "express"
import { findProduct, saveOrder } from "../controllers/orderController"

const orderRouter = express.Router()

orderRouter.post('/save', saveOrder)
orderRouter.get('/findProduct', findProduct)

export default orderRouter