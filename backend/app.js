const express=require('express')
const app=express()
const auth=require('./Routes/auth')
const cors=require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/v1/users', auth)


app.post('/register', (req, res)=>{
    res.send('hello backend')
})

app.listen(5000, console.log('App running on port 5000')
)
