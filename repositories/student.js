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
export default {
    login,register ,getallstudents
}