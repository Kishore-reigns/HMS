const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const roleRoutes = require('./Routes/roleRoutes')
const patientRoutes = require('./Routes/patientRoutes')
const doctorRoutes = require('./Routes/doctorRoutes')
const adminRoutes = require('./Routes/AdminRoutes')

const PORT = 5000
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/HMS',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})


app.use('/api/roles',roleRoutes)
app.use('/api/patient',patientRoutes)
app.use('/api/doctor',doctorRoutes)
app.use('/api/admin',adminRoutes)


app.listen(PORT, ()=>{
    console.log('server running on port ' + PORT )
})