require('express-async-errors')
const express=require('express')
const app=express()
const auth=require('./Routes/auth')
const cors=require('cors')
const cookieParser=require('cookie-parser')

const connectDB=require('./db/connect')
const errorHandlerMiddleware=require('./middlewares/errorHandler')
const notFound=require('./middlewares/notFound')
const jobRouter=require('./Routes/job')
const applicationRouter=require('./Routes/application')
const verifyToken=require('./middlewares/verify')


require('dotenv').config()


app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))


app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/v1/users', auth)
app.use('/api/v1/job',verifyToken, jobRouter)
app.use('/api/v1/application',verifyToken, applicationRouter)

app.get('/token', (req,res)=>{
    console.log(req.cookies);
    res.send('testing cookies')
    
})

const uri=process.env.MONGO_URL


app.use(errorHandlerMiddleware)
app.use(notFound)

const start=async ()=>{
    try {
        await connectDB(uri)
        app.listen(5000, console.log('App running on port 5000'))
    } catch (error) {
        console.log(error)
        
    }
}

start()


