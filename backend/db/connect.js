const mongoose=require('mongoose')

const connect= (url)=>{
    mongoose.connect(url)
    .then(console.log('Connected to database'))
    .catch(err=>console.log(err)
    )
    
}

module.exports=connect