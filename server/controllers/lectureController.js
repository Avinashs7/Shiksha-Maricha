const db=require('../models')
const lecture=db.lectures


const getLecture=async(req,res)=>{
    try{
        const Lectures=await lecture.findAll({where:{course_id:req.params.cid}});
        res.status(200).send(Lectures)
    }
    catch(err){
        res.status(500).send({success:false});
    }
}

const addLecture=async(req,res)=>{
    try{
        const Lecture=await lecture.create({...req.body})
        res.status(200).send({success:true,Lecture});
    }
    catch(err){
        res.status(300).send({success:false});
    }
}
module.exports={addLecture,getLecture}