import mongoose, { Schema , ObjectId} from 'mongoose'

export default mongoose.model('Student',
    new Schema(
        {
            id : {type: ObjectId},
            name : {
                type : String,
                required : true,
                validate : {
                    validator : (value) => value.lenght > 10,
                    message : "Tên phải lớn hơn 10 ký tự" 
                }
            },
            age : {
                type : String,
                required : true,

            },
            language:{
                type : [String]
            },
            gender : {
                type : String ,
                enum : {
                    values : ['Male','Female'],
                    message : "{VALUE} is not supported"
                }
            },
            phoneNumber : {
                type : String,
                required : true ,
                validate : {
                    validator:(phoneNumber) => phoneNumber.lenght > 5 ,
                    message : "Số điện thoại phải lớn hơn 5 kí tự"
                }
            }
            
        }
    )
) 