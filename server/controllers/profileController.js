const db=require('../models')
const profile=db.profiles

//Add profile for a user
const addProfile=async (req,res)=>{
    try{
        //Additional information for a user is stored in profile
        const userProfile={qualification:req.body.qualification,DOB:req.body.DOB,phone:req.body.phone,address:req.body.address}
        const user=await profile.findOne({where:{userId:req.userId}})
        if(!user){
            await profile.create({...userProfile,userId:req.userId});
        }
        else{
            user.set(userProfile);
            user.save();
        }
        return res.status(200).send({success:true})
    }
    catch(err){
        res.status(500).send({success:false})
    }
}

//To retrieve the profile details to display
const getProfile=async(req,res)=>{
    try{
        const oneProfile=await profile.findOne({where:{userId:req.userId}})
        if(!oneProfile)return res.status(404).send({success:false});
        return res.status(200).send({success:true,...oneProfile.dataValues});
    }
    catch(err){
        res.status(500).send({success:false})
    }
}

//Delete the profile Details As of Now it is not being used in the frontend
const deleteProfile=async(req,res)=>{
    try{
        await profile.destroy({where:{UserId:req.params.id}})
        res.status(200).send({success:true})
    }
    catch(err){
        res.status(500).send({success:false})
    }
}

module.exports={addProfile,deleteProfile,getProfile}