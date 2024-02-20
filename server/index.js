const express=require('express')
const cors=require('cors')
const userRouter=require('./routes/userRoute')
const app=express()
const port=process.env.PORT||8000

app.use(cors({origin:'http://localhost:5173',
        credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/users',userRouter)


app.listen(port,()=>{
    console.log(`Server is running in http://localhost:${port}`)
})