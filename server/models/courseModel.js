module.exports=(sequelize,DataTypes)=>{
    const Course=sequelize.define("course",{
        thumbnail:{
            type:DataTypes.TEXT,
        },
        title:{
            type:DataTypes.TEXT,
        },
        description:{
            type:DataTypes.TEXT,
        },
        stream:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },{
        timestamps:false,
    });
    return Course
}