import { print , OutputType } from "../helpers/print";
export default class Exception extends Error{
    //hàm constructor 
    constructor(message){
        super(message) // gọi constructor của lớp cha (Error)
        print(message,OutputType.ERROR)
    }
}