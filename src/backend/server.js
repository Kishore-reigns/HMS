const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 5000

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/HMS',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})

const Role = mongoose.model('Role', new mongoose.Schema({
    title:String,
    description:String,
}))

app.get('/roles', async(req,res) =>{
    const roles = await Role.find()
    res.json(roles)
})

app.listen(PORT, ()=>{
    console.log('server running on port ' + PORT )
})