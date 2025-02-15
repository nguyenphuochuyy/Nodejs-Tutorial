import mongoose from 'mongoose'
import { 
    OutputType , print
}
 from "../helpers/print.js"
 
async function connect() {
    try {
        let connection = await mongoose.connect(process.env.MONGO_URI);
        print("connect mongodb successfully" , OutputType.SUCCESS)
   
        return connection;

    } catch (error) {
        const {code} = error
        if(code == 8000){
            print("Wrong database's username and password" , OutputType.ERROR)    
        }
        else
        print("cant connect database " , OutputType.ERROR)
        
        
       
    }
}
export default connect;