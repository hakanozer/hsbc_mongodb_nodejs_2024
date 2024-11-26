import express from 'express'
import connectDB from './configs/db';
import userRouter from './routes/userRoutes';

const app = express()

// DB Connection
connectDB();

// Middleware - Ara katman
app.use(express.json())

// Routes
app.use('/api/users', userRouter)

const port = 4000
app.listen(port, () => {
    console.log("Server is running:" + "http://localhost:"+ port)
})


