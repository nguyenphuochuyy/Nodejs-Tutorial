import express from "express"

const routes = express.Router();

routes.get("/" , (req , res)=>{
    res.send("Get students")
})
routes.get("/:id" , (req ,res)=>{
    res.send("Get detail student by id")
})
routes.post("/login" , (req , res)=>{
    const {email , password } = req.body;
    res.send(`Student login` )
})
export default routes