const db=require('../models')
const course=db.courses
const courseAdded=db.courseAdded
const allCourses=async (req,res)=>{
    try{
        const data=await course.findAll({});
        res.status(200).send(data);
    }
    catch(err){
        res.status(500).send({success:false})
    }
}
const oneCourse=async(req,res)=>{
    try{
        const data=await course.findAll({where:{cid:req.params.cid}})
        res.status(200).send(data)
    }
    catch(err){
        res.status(500).send({success:false})
    }
}
const addCourse=async(req,res)=>{
    try{
        const body=req.body
        const result=await course.create(body)
        await courseAdded.create({courseId:result.id,userId:req.userId})
        res.status(200).send({success:true,courseId:result.id})
    }
    catch(err){
        res.status(500).send({success:false})
    }
}
const deleteCourse=async(req,res)=>{
    try{
        await course.destroy({where:{cid:req.params.id}})
        res.status(200).send({success:true})
    }
    catch(err){
        res.status(500).send({success:false})
    }
}
const allStream=async(req,res)=>{
    try{
        const data=await course.findAll({attributes:['stream']})
        const stream=[...new Set(data.map(course=>course.stream))]
        return res.status(200).send({success:true,stream:stream})
    }
    catch(err){
        res.status(500).send({success:false})
    }
}
module.exports={allCourses,oneCourse,addCourse,deleteCourse,allStream}