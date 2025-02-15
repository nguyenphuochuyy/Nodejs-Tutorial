import { print , OutputType } from "../helpers/print.js";
export default class Exception extends Error{
    static ExistUser = "Người dùng đã tồn tại";
    static CANNOT_REGISTER_USER = "Không thể tạo mới người dùng"
    //hàm constructor 
    constructor(message){
        super(message) // gọi constructor của lớp cha (Error)
        print(message,OutputType.ERROR)
    }
}