module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("users",{
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        role:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        lastName:{
            type:DataTypes.STRING,
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    });
    return User
}