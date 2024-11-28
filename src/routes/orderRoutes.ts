import express from "express"
import { saveOrder } from "../controllers/orderController"

const orderRouter = express.Router()

orderRouter.post('/save', saveOrder)

export default orderRouter