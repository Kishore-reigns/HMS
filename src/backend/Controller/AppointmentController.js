const Appointment = require('../Models/Appointments')

const postAppointment = async(req,res) =>{
    try{
        const data = req.body
        console.log(data)
        const newAppointment = new Appointment(data)
        await newAppointment.save()
        res.status(201).json({message:'Appointment added successfully'})
    }catch(err){
        console.error('error in posting appointment',err)
        res.status(500).json({error:'server error'})
    }
}


const getAppointment = async(req,res)=>{
    try{
        const appointments = await Appointment.find()
        res.json(appointments)
    }catch(err){
        console.error(err)
        res.status(500).json({error:'server error'})
    }
}



module.exports = {postAppointment,getAppointment}