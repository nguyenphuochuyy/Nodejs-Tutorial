const login = async({email ,pass})=>{
    console.log("login user in user repository");   
}

const register  = async({email ,pass , name , age})=>{
    console.log('register user with email ' + email + 'password' + pass + "name " + name + "age"+ age)   
}

export  default{
    login,register 
}