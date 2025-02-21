import { Student } from "../models/index.js";
import Exception from "../exceptions/Exception.js"
const login = async({email ,pass})=>{
    console.log("login student in user repository");   
}
const register  = async({email ,pass , name , age})=>{
    console.log('register student with email ' + email + 'password' + pass + "name " + name + "age"+ age)   
}
const getallstudents = async({
    page , size , searchString
})=>{
    console.log('get all user with paging');
    
}
const insertStudent = async({name , age , language,gender, phoneNumber })=>{
    try {
        const student = await Student.create({name , age , language,gender, phoneNumber })
        return student;
    } catch (error) {
        throw new Exception("Thêm sinh viên thất bại")
        
    }  
}
export default {
    login,register ,getallstudents , insertStudent 
}