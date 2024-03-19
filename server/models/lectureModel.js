module.exports=(sequelize,DataTypes)=>{
    const Lecture=sequelize.define("lecture",{
        title:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        links:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        thumbnail:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false,
        }
    },{
        timestamps:false,
    });
    return Lecture
}