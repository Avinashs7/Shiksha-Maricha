module.exports=(sequelize,Datatypes)=>{
    const courseTaken=sequelize.define('courseTaken',{

    },
    {
        timestamps:false,
    })
    return courseTaken;
}