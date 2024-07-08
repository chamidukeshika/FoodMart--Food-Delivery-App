import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config'
import cartRouter from "./routes/carRoutes.js"
import orderRouter from "./routes/orderRoutes.js"


//app config
const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

//api endpoints

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter )


app.get("/", (req,res) => {
   res.send("API Working") 
})

app.listen(port, () => {
    console.log(`Server Conneted on http://localhost:${port}`)
})
