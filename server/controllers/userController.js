const db=require('../models')
const User=db.users

const addUser=async (req,res)=>{
    try{
        const body=req.body
        const defaultValue={lastName:""}
        const newUser={...defaultValue,...body}
        // console.log(newUser)
        const result=await User.create(newUser)
        res.status(200).send(newUser)
    }
    catch(err){
        console.log(err)
        res.status(500).send({success:false,msg:err})
    }
}

const isUser=async (req,res)=>{
    try{
        const userDetails=await User.findOne({where:{email:req.params.email,password:req.params.password}})
        if(userDetails){
            return res.status(200).json({success:true})
        }
        res.status(200).send({success:false,msg:'no user'})
    }
    catch(err){
        console.log(err)
        res.status(500).send({success:false,msg:err})
    }
}
module.exports={addUser,isUser}
