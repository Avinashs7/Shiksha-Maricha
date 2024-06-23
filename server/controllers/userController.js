const db=require('../models')
const axios=require('axios')
const validation=db.validation
const bcrypt=require('bcrypt')
const {setToken}=require('../authentication');
const  transporter  = require('../config/nodemailer');
const User=db.users
require('dotenv').config();
// const profile=db.profiles

async function createProfile(id){
    await db.sequelize.query('CALL createUserProfile(:id)',{
        replacements:{id},
        type:db.sequelize.QueryTypes.RAW
    });
}

function otpgenerator(){
    return Math.floor(100000+Math.random()*900000).toString();
}

const generateOtp=async(email,id)=>{
    const otp=otpgenerator();
    await validation.create({otp:otp,userId:id})
        const mailOptions={
        from: process.env.EMAIL,
        to: email,
        subject: 'Email Verification OTP',
        text: `Your OTP for email verification is ${otp}. It will expire in 5 minutes.`
    }
        try{
            transporter.sendMail(mailOptions,(error,info)=>{
                if (error) {
                    console.error(error);
                    return false;
                }
            })
            return true;
        }
        catch(err){
            console.error(err)
            return false;
        }
}
const addStudent=async (req,res)=>{
    try{
        const hashPassword=await bcrypt.hash(req.body.password,10);
        req.body.password=hashPassword
        const body=req.body
        const newUser={lastName:"",role:'student',...body}
        const result=await User.create(newUser)
        createProfile(result?.id);
        const status=generateOtp(result?.email,result?.id);
        if(!status)return res.send({success:false,msg:"otp error"});
        
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
        if(!data.verified)return res.status(300).send({success:false,msg:"User not verified"});
        const val=await bcrypt.compare(req.body.password,data.password)
        if(!val){
            return res.status(300).send({success:false,msg:'password incorrect'})
        }
        const token=setToken(data.id,data.role);
        return res.status(200).send({success:true,token:token,userRole:data.role})
    }
    catch(err){
        return res.status(500).send({success:false,msg:"error occured"})
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


const GOOGLE_OAUTH2_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

const getGoogleAccount=(req,res)=>{
    const params = new URLSearchParams({
        client_id: process.env.GOOGLE_AUTH_CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URL,
        response_type: 'code',
        scope: 'openid profile email',
    });
    // console.log(`${GOOGLE_OAUTH2_URL}?${params.toString()}`)
    return res.status(200).send({url:`${GOOGLE_OAUTH2_URL}?${params.toString()}`})
}

async function getGoogleTokens (code){
    const response = await axios.post(GOOGLE_TOKEN_URL, null, {
        params: {
            code,
            client_id: process.env.GOOGLE_AUTH_CLIENT_ID,
            client_secret: process.env.GOOGLE_AUTH_SECRET_KEY,
            redirect_uri: process.env.REDIRECT_URL,
            grant_type: 'authorization_code',
        },
    });
    return response.data;
}

async function getGoogleUser(id_token, access_token){
    const response = await axios.get(GOOGLE_USERINFO_URL, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    return response.data;
}

const handleGoogleUser=async(req,res)=>{
    try {
        const { code } = req.query;
        const tokens = await getGoogleTokens(code);
        const googleUser = await getGoogleUser(tokens.id_token, tokens.access_token);
        if(googleUser.email_verified){
            const user=await User.findOne({where:{email:googleUser.email}});
            if(user){
                req.body.email=googleUser.email;
                req.body.password=googleUser.sub+googleUser.family_name;
                isUser(req,res);
            }
            else{
                let newUser={
                    email:googleUser.email,
                    firstName:googleUser.given_name,
                    lastName:googleUser.family_name,
                    role:"Student",
                    gender:"Male",
                    photo:googleUser.picture,
                    verified:googleUser.email_verified,
                }
                const password=await bcrypt.hash(googleUser.sub+googleUser.family_name,10);
                newUser={...newUser,password:password}
                const result=await User.create(newUser)
                createProfile(result?.id);
                const token=setToken(result.id,result.role);
                return res.status(200).redirect(`http://localhost:5173/users/google?token=${token}&role=${result.role}`);
            }
        }
    }
    catch(err){
        console.error("Error in signing in with google"+err);
        return res.status(200).redirect(`http://localhost:5173/users/google/error?${err}`);

    }}
module.exports={addStudent,isUser,getUser,addTutor,editUser,getGoogleAccount,handleGoogleUser}
