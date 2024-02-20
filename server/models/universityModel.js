module.exports=(sequelize,DataTypes)=>{
    const University=sequelize.define("university",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        uid:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        start_date:{
            type:DataTypes.DATE,
            allowNull:false,
        },
    });
    return University
}