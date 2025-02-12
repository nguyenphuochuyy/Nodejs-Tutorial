const getAllStudent = async (req , res)=>{
    res.send("get all students")
}

const getStudentById = async (req , res)=>{
    res.send("get detail student by ID")
}
export default {
    getAllStudent , getStudentById
}