const express=require('express')
const cors=require('cors')
const fileUpload=require('express-fileupload')

const userRouter=require('./routes/userRoute')
const courseRouter=require('./routes/courseRoute')
const profileRouter=require('./routes/profileRoute')
const universitRouter=require('./routes/universityRoute')
const lectureRouter=require('./routes/lectureRoute')

const app=express()
const port=process.env.PORT||8000

app.use(cors({origin:'http://localhost:5173',
        credentials:true
}))

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users',userRouter)
app.use('/course',courseRouter)
app.use('/profile',profileRouter)
app.use('/lecture',lectureRouter)
app.use('/university',universitRouter)

app.listen(port,()=>{
    console.log(`Server is running in http://localhost:${port}`)
})
