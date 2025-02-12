// vì export default nên mongoose phải nằm ngoài
import mongoose , {  Schema , ObjectId } from mongoose

// import thư viện validator , phương thức kiểm tra có đúng định dạng email không
import isEmail from "validator/lib/isEmail"
// xuất entity User từ hàm .model của mongoose
export default mongoose.model('User',
    new Schema({
        // danh sách các trường của User
        id : {type : ObjectId},
        name : {
            type : String , 
            required : true, // not null 
            validate :   // tùy chọn theo yêu cầu bài toàn
            {
                validator : (value)=> value.lenght > 3,
                message : 'User name mush be at least 3 character'
            }
        },
        email : {
            type : String,
            validate : {
                validator : ()=> isEmail,
                message : "Email is incorrect format"
            }
        }

    })
)