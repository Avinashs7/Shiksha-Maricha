const {getToken}=require('../authentication')

function userOnly(req,res,next){
    try{
        const authorizationHeader=req.headers['authorization'];
        if(authorizationHeader || !authorizationHeader.startsWith('Bearer')){
            const token=authorizationHeader.split('Bearer ')[1];
            const user=getToken(token);
            if(!user)return res.status(500).send({success:false,status:"not valid user"});
            req.userId=user.userId;
            req.userRole=user.userRole;
            next();
        }
    }
    catch(err){
        console.log('error');
        console.log(err);
    }
}
function studentOnly(req,res,next){
    try{
        const authorizationHeader=req.headers['authorization'];
        if(authorizationHeader || !authorizationHeader.startsWith('Bearer')){
            const token=authorizationHeader.split('Bearer ')[1];
            const user=getToken(token);
            if(!user)return res.status(500).send({success:false,status:"not valid user"});
            req.userId=user.userId;
            req.userRole=user.userRole;
            if(user.role!=='student')return res.status(500).send({success:false,msg:'No access'})
            next();
        }
    }
    catch(err){
        console.log('error');
        console.log(err);
    }

}
function tutorOnly(req,res,next){
    try{
        const authorizationHeader=req.headers['authorization'];
        if(authorizationHeader || !authorizationHeader.startsWith('Bearer')){
            const token=authorizationHeader.split('Bearer ')[1];
            const user=getToken(token);
            if(!user)return res.status(500).send({success:false,status:"not valid user"});
            req.userId=user.userId;
            req.userRole=user.userRole;
            if(user.userRole!=='tutor')return res.status(500).send({success:false,msg:'No access'})
            next();
        }
    }
    catch(err){
        console.log('error');
        console.log(err);
    }

}
function universityAdminOnly(req,res,next){
    try{
        const authorizationHeader=req.headers['authorization'];
        if(authorizationHeader || !authorizationHeader.startsWith('Bearer')){
            const token=authorizationHeader.split('Bearer ')[1];
            const user=getToken(token);
            if(!user)return res.status(500).send({success:false,status:"not valid user"});
            req.userId=user.userId;
            req.userRole=user.userRole;
            if(user.role!=='admin')return res.status(500).send({success:false,msg:'No access'})
            next();
        }
    }
    catch(err){
        console.log(err);
    }

}


module.exports={userOnly,studentOnly,tutorOnly,universityAdminOnly}