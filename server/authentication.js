require('dotenv').config()
const jwt=require('jsonwebtoken')

const setToken=(id,role)=>{
    return jwt.sign({userId:id,userRole:role},process.env.ACCESS_TOKEN,{expiresIn:'1h'})
}

const getToken=(token)=>{
    if(!token)return null;
    try{
        return jwt.verify(token,process.env.ACCESS_TOKEN)
    }
    catch(err){
        return null;
    }
}
module.exports={setToken,getToken}