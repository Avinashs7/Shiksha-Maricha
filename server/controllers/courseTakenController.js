const db=require('../models/index')
const courseTaken=db.coursetaken
const takeCourse=async(req,res)=>{
    try{
        const oneData =await courseTaken.find({where:{userId:req.userId,courseId:req.courseId}})
        if(oneData)return res.status(200).send({success:false,msg:'course already taken by you'})
        const data =await courseTaken.create({userId:req.userId,courseId:req.params.courseId})
        if(!data){
            return res.status(500).send({success:false,msg:'error taking the course'})
        }
        return res.status(200).send({success:true,data:data})
    }
    catch(err){
        res.status(500).send({success:false,msg:err})
    }
}


module.exports={takeCourse}