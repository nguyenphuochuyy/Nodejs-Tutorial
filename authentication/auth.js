import jwt from 'jsonwebtoken'
import HttpsStatusCode from '../exceptions/StatusCode.js';
export default function checkToken(req,res,next){
    // bỏ qua với login và register
    if(req.url.toLowerCase().trim() == '/users/login' || req.url.toLowerCase().trim() == '/users/register'){
        next()
        return
    }
    // các request khác
    // lấy token và vailidate token
    const token = req.headers?.authorization.split(" ")[1];
    try {
        // lấy ra đối tượng jwt để xác minh
        const jwtObject = jwt.verify(token , process.env.JWT_SECRET)
        const isExpired = Date.now()  >= jwtObject.exp * 1000;
        if(isExpired){
            res.status(HttpsStatusCode.BAD_REQUEST).json({
                message : "token đã hết hạn"
            })
            res.end();
        }
        else {
            next();
        }
    }catch(exception) {
       res.status(HttpsStatusCode.BAD_REQUEST).json({
        message : "bad request"
      })
    }
    
}