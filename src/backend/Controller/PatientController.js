
const Patient = require('../Models/Patient')



// register
const registerPatient = async(req,res) =>{
    try{

        const data = req.body
        const {email} = data

        const emailExist = await Patient.findOne({email})
        if(emailExist) return res.status(400).json({message:'Email alrady exists'})

        const newPatient = new Patient(data)
        await newPatient.save()
        res.status(201).json({ message: 'Patient registered successfully' })

    }catch(err){
        console.error(err)
        res.status(500).json({error:'Server error'})
    }
}

// login 

const loginPatient = async(req,res) =>{
    try{
        const {email , password} = req.body
        const patient = await Patient.findOne({email})
        if(!patient || patient.password !== password){
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        res.status(200).json({ message: 'Login successful', patient })

    }catch(err){
        console.error(err)
        res.status(500).json({error:'Server error'})
    }
}

module.exports = { registerPatient, loginPatient }