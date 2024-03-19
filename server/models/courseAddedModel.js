module.exports=(sequelize,Datatypes)=>{
    const courseAdded=sequelize.define('courseAdded',{

    },
    {
        timestamps:false,
    })
    return courseAdded;
}