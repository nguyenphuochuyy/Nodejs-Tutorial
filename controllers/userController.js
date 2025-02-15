import { userRepository } from "../repositories/index.js"
import {EventEmitter} from "node:events"
import HttpsStatusCode from "../exceptions/StatusCode.js";
import user from "../repositories/user.js";
import Exception from "../exceptions/Exception.js";
import { log } from "node:console";
const myEvent = new EventEmitter();

myEvent.on('event.register.user', (param)=>{
    console.log(`They talked about : ${JSON.stringify(param)}`);
    
})
const getAllUser = async (req , res) => {
    res.status(HttpsStatusCode.OK).json({
        message : "get all user successfully !",
        data: [
            {
                "name" : "huy",
                "email" : "huy@gmail.com",
                "age": "22"
            },
            {
                "name" : "khanh",
                "email" : "khanh@gmail.com",
                "age": "22"
            },
            {
                "name" : "tú",
                "email" : "tu@gmail.com",
                "age": "19"
            },
        ]
    })
}
const getUserById = async(req , res)=>{
    res.send("get user by Id")
}

const userLogin = async (req ,res)=>{
    const {email, password} = req.body;
    try {

        // gọi repository login() và truyền hai tham số email , password
        await userRepository.login({email, password})
        res.status(HttpsStatusCode.OK).json([
            {
                message : "người dùng đăng nhập thành công",
            }
        ])
    } catch (exception) {
        res.status(HttpsStatusCode.INTERNAL_SERVER_ERROR).json({
            message : exception.toString()
        })
    }
 
}

const userRegister = async (req ,res)=>{
    const {
        name,
        email,
        password, 
        age
    } = req.body;
    try {
        const user = await userRepository.register({name,email,password,age})
     
        
        // myEvent.emit('event.register.user', ({email ,password}))
        res.status(HttpsStatusCode.INSERT_OK).json(
            {
                message : "người dùng đăng kí  thành công",
                data : user
            }
        )
    } catch(error) {
        res.status(HttpsStatusCode.INTERNAL_SERVER_ERROR).json({
            message : error.toString()
        })
        
    }
    // call repository

}

//event emitter

export default {
    getAllUser , getUserById , userLogin,userRegister
}