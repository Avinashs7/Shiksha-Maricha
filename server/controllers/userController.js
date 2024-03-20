const db=require('../models')
const bcrypt=require('bcrypt')
const {setToken}=require('../authentication')
const User=db.users
// const profile=db.profiles

async function createProfile(id){
    await db.sequelize.query('CALL createUserProfile(:id)',{
        replacements:{id},
        type:db.sequelize.QueryTypes.RAW
    });
}

const addStudent=async (req,res)=>{
    try{
        const hashPassword=await bcrypt.hash(req.body.password,10);
        req.body.password=hashPassword
        const body=req.body
        const newUser={lastName:"",role:'student',...body}
        const result=await User.create(newUser)
        createProfile(result?.id);
        // const Profile=await profile.create({userId:result?.id})
        const token=setToken(result.id,result.role);
        res.status(200).send({success:true,token:token,userRole:result.role})
    }
    catch(err){
        console.log(err)
        res.status(500).send({success:false,msg:err})
    }
}

const addTutor=async (req,res)=>{
    try{
        const hashPassword=await bcrypt.hash(req.body.password,10);
        req.body.password=hashPassword
        const body=req.body
        const newUser={lastName:"",role:'tutor',...body}
        const result=await User.create(newUser)
        createProfile(result?.id);
        // const Profile=await profile.create({userId:result?.id})
        const token=setToken(result.id,result.role);
        res.status(200).send({success:true,token:token,userRole:result.role})
    }
    catch(err){
        console.log(err)
        res.status(500).send({success:false,msg:err})
    }
}

const isUser=async (req,res)=>{
    try{
        const data=await User.findOne({where:{email:req.body.email}})
        if(!data)return res.status(300).send({success:false,msg:"No user found"});
        const val=await bcrypt.compare(req.body.password,data.password)
        if(!val){
            return res.status(300).send({success:false,msg:'password incorrect'})
        }
        const token=setToken(data.id,data.role);
        res.status(200).send({success:true,token:token,userRole:data.role})
    }
    catch(err){
        res.status(500).send({success:false,msg:"error occured"})
    }
}
const getUser=async(req,res)=>{
    try{
        const oneUser=await User.findOne({where:{id:req.userId}})
        if(!oneUser)return res.status(404).send({success:'false'})
        return res.status(200).json({success:true,firstName:oneUser.firstName,lastName:oneUser.lastName,email:oneUser.email,gender:oneUser.gender,photo:oneUser.photo})
    }
    catch(err){
        res.status(500).send({success:false,msg:"error occured"})
    }
}
const editUser=async(req,res)=>{
    try{
        const data=await User.findOne({where:{id:req.userId}});
        data.set(req.body);
        data.save();
        return res.status(200).send({success:true});
    }
    catch(err){
        res.status(500).send({success:false})
    }
}


module.exports={addStudent,isUser,getUser,addTutor,editUser}
