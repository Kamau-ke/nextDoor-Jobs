const express=require('express')
const app=express()
const auth=require('./Routes/auth')
const cors=require('cors')
const connectDB=require('./db/connect')
const errorHandlerMiddleware=require('./middlewares/errorHandler')
const notFound=require('./middlewares/notFound')

require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/api/v1/users', auth)


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


