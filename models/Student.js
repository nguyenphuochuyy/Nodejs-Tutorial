import mongoose, { Schema , ObjectId} from 'mongoose'

export default mongoose.model('Student',
    new Schema(
        {
            id : {type: ObjectId},
            name : {
                type : String,
                required : true,
                validate : {
                    validator : (name)=> name.length > 3 ,
                    message : "Tên phải lớn hơn 3 kí tự"
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
                    validator: (value)=> value.length > 8 ,
                    message : "Số điện thoại phải lớn hơn 5 kí tự"
                }
            }
            
        }
    )
) 