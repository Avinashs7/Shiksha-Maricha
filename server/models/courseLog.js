module.exports=(sequelize,DataTypes)=>{
    const CourseLog=sequelize.define("courseLog",{
        course_id:{
            type:DataTypes.INTEGER,
        },
        course_name:{
            type:DataTypes.TEXT,
        },
        timestamp:{
            type:DataTypes.DATE,
        },
    },{
        timestamps:false,
    });
    return CourseLog
}