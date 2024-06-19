const db=require('../models')
const validate=db.validation
const validateOtp=async(req,res)=>{
    try{
        const data=await validate.findOne({where:{userId:req.userId}})
        if(data.expires<new Date())return res.send({success:false,msg:"Too late"});
        if(data.otp==req.body.otp)return res.status(200).send({success:true})
    }
    catch(err){
        console.error(err);
        return res.send(500).send({success:false})
    }
}

module.exports={validateOtp}