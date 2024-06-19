module.exports=(sequelize,DataTypes)=>{
    const validation=sequelize.define("validation",{
        otp:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        expires:{
            type:DataTypes.DATE,
            default:new Date()+5*60,
        }
    },{
        timestamps:false,
    })
    return validation;
}

