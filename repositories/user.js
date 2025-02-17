import {print,OutputType} from "../helpers/print.js"
import {User} from "../models/index.js"
import Exception from "../exceptions/Exception.js"
import jwt from 'jsonwebtoken'
// import thư viện bcrypt để mã hóa mật khẩu trước khi lưu vào db
import bcrypt from 'bcrypt'
//tên tham số password phải nhận ở hàm này luôn giống vói tham số trong destructuring ở controller 
const login = async ({email , password}) => {
   
     let existUser = await User.findOne({email}).exec();
     if(existUser){
        // kiểm tra mk nhập vào và mật khẩu đã mã hóa có giống nhau không , phải chờ xử lý xong mới tiếp tục các dòng khác
        let isMatch = await bcrypt.compare(password,existUser.password)
        if(isMatch){
            // tạo JWT
           let token =  jwt.sign({
                data : existUser
            },process.env.JWT_SECRET,
            // tham số thứ 3 là 1 option
            {
                // thời hạn của token
                expiresIn : '10 days'
            }
        )
        // clone và thêm các thuộc tính của 1 đối tượng
        return{
            // .toObject để lấy dữ liệu dạng thô không lấy các trường khác của mongodb
            ...existUser.toObject(),
            password : 'not show',
            token : token
        }
        }
        else{
            throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD);
        }
     }
     else
     {
        throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD);
     }

}

const register = async({name ,email , password , age})=>{
     try {
        // exec() : hàm thực thi
        // findOne() : hàm tìm kiếm 1 đối tượng
        console.log(email);
        
        const existUser = await User.findOne({email}).exec();        
        if(!!existUser){
            throw new Exception(Exception.ExistUser)
        }
        // hàm hash nhận hai tham số là pass (do người dùng nhập) và 1 SALT_ROUNDS để mã hóa pass (số nguyên) 
         const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
         // thêm vào db 
       const newUser = await User.create({
        name,
        email, 
        password : hashPassword,
        age,
       })   
       return {
        //_doc : trả về thông tin nguyên bản của đối tượng
        ...newUser._doc,
        password : "not show"
       }
     } catch (exception) {
        // check validate model 
        throw new Error(exception)
     }
}

export default {
    login,register 
}