const dbConfig = require('../config/dbConfig')
const {Sequelize,DataTypes}=require('sequelize')
const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.DIALECT,
        operatorsAliases:0,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle,
        },
        logging:false,
    }
)
sequelize.authenticate()
.then(()=>{
    console.log('connected')
})
.catch((err)=>{
    console.log(err)
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.users=require('./userModel.js')(sequelize,DataTypes)
db.universities=require('./universityModel.js')(sequelize,DataTypes)
db.profiles=require('./profileModel.js')(sequelize,DataTypes)
db.courses=require('./courseModel.js')(sequelize,DataTypes)
db.coursetaken=require('./courseTakenModel.js')(sequelize,DataTypes)
db.lectures=require('./lectureModel.js')(sequelize,DataTypes)
db.courseAdded=require('./courseAddedModel.js')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{console.log('yes re-sync done')})
.catch((err)=>console.log(err))

db.profiles.belongsTo(db.users);

db.coursetaken.belongsTo(db.courses);
db.coursetaken.belongsTo(db.users);

db.courseAdded.belongsTo(db.courses);
db.courseAdded.belongsTo(db.users);

db.courses.hasMany(db.lectures,{
    foreignKey:'course_id',
    as:'lecture'
})

db.lectures.belongsTo(db.courses,{
    foreignKey:'course_id',
    as:'course'
})

module.exports=db
