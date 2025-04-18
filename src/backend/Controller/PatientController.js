
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



const getPatients = async(req,res)=>{
    try{
        const patients = await Patient.find()
        res.json(patients)
    }catch(err){
        console.error(err)
        res.status(500).json({error:'Server error'})
    }
}

const getPatientbyEmail = async(req,res)=>{
    try{
        const {email} = req.params 
        console.log(email)
        const patient = await Patient.findOne({email})
        if (!patient) return res.status(404).json({ message: "Doctor not found" })
        res.json(patient)
    }catch (err) {
        console.error(err)
        res.status(500).json({ error: "Server error" })
    }
}


// forgot password
const patientForgot = async(req,res)=>{
    console.log('entered func')
    try{
        const {email ,petName, password} = req.body
        const user = await Patient.findOne({email})

        console.log(user)

        if (!user || user.petName !== petName) {
            return res.json({ success: false, message: "Invalid email or pet name" });
        }

        console.log('crossed if')
        user.password = password
        user.confirmPass = password
        await user.save()
        return res.json({ success: true, message: "set successfully" });
    }catch(err){
        console.error(err)
        return res.json({ success: false, message: "Invalid email or pet name" });
    }
}


module.exports = { registerPatient, loginPatient,getPatients,getPatientbyEmail,patientForgot}