import mongoose, { Schema ,ObjectId} from "mongoose";

export default mongoose.model('Klass',
    new Schema({
        id : {type: ObjectId},
        name : {
            type : String,
            required : true
        }
    })
)