module.exports=(sequelize,DataTypes)=>{
    const University=sequelize.define("university",{
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        photo:{
            type:DataTypes.BLOB,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        address:{
            type:DataTypes.TEXT,
        },
        start_date:{
            type:DataTypes.DATE,
        },
    },{
        timestamps:false,
    });
    return University
}