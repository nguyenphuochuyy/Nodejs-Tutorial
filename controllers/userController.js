import { userRepository } from "../repositories/index.js"
import {EventEmitter} from "node:events"
import HttpsStatusCode from "../exceptions/StatusCode.js";

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
    const {email , password} = req.body
    await userRepository.login({email, password})
    // call repository
    res.status(HttpsStatusCode.OK).json([
        {
            message : "người dùng đăng nhập thành công",

        }
    ])
}

const userRegister = async (req ,res)=>{
    const {
        name , email , password , age
    } = req.body

    // call repository
    userRepository.register({email,password,name,age})
    myEvent.emit('event.register.user', ({email ,password}))
    res.status(HttpsStatusCode.OK).json([
        {
            message : "người dùng đăng kí  thành công",

        }
    ])
}

//event emitter

export default {
    getAllUser , getUserById , userLogin,userRegister
}