import express from "express"
//import thư viện dotenv để đọc các biến từ file .env
import * as dotenv from "dotenv"
// import các routes đã định nghĩa ở file index.js trong folder routes
import {UserRoutes , StudentRoutes} from "./routes/index.js"
import connect from "./database/database.js"
// import thư viện express-validator để validate dữ liệu
import { body , validationResult } from "express-validator"

dotenv.config() // bắt buộc khi khởi tạo để đọc được biến môi trường
const app = express()
// đọc port từ biến môi trường
const port = process.env.PORT || 3000 

// sử dụng express json để đọc thông tin dạng json từ client 
app.use(express.json())

//cấu hình khi server nhận request
app.get('/' , (req , res)=>{
    res.send("response from root router")
})
app.use("/users", UserRoutes)
app.use("/students" , StudentRoutes)
// server lắng nghe trên cổng 3000
app.listen(port , async ()=> {
    await connect();
    console.log(`Server is running on port ${port}`)
})



