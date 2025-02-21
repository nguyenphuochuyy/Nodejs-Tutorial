import HttpsStatusCode from "../exceptions/StatusCode.js"
import { studentRepository } from "../repositories/index.js"

const getAllStudent = async (req , res)=>{
    res.send("get all students")
}

const getStudentById = async (req , res)=>{
    res.send("get detail student by ID")
}
const insertStudent = async (req,res)=>{
     try {
        // await đối tượng student được tạo ở repository nhận các tham số từ body của request
        const student = await studentRepository.insertStudent(req.body);
        res.status(HttpsStatusCode.INSERT_OK).json({
        message : "Thêm mới sinh viên thành công",
        data : student
       })
       return student;
    }catch (error) {
        res.status(HttpsStatusCode.INTERNAL_SERVER_ERROR).json({
            message : "Thêm sinh viên thất bại !"
        })
     }
}
export default {
    getAllStudent , getStudentById ,insertStudent
}