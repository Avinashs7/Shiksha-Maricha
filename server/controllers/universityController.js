const db=require('../models')
const university=db.universities
const addUniversity=async(req,res)=>{
    try{
        const body=req.body
        const result=await university.create(body)
        res.status(200).send(result)
    }
    catch(err){
        res.status(500).send({success:false})
    }
}
const deleteUniversity=async(req,res)=>{
    try{
        await university.destroy({where:{tid:req.params.tid}})
        res.status(200).send({success:true})
    }
    catch(err){
        res.status(500).send({success:false})
    }
}

module.exports={addUniversity,deleteUniversity}