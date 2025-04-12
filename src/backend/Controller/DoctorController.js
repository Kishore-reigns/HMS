const Doctor = require('../Models/Doctor')

// register
const registerDoctor = async(req,res) =>{
    try{

        const data = req.body
        const {email} = data

        const emailExist = await Doctor.findOne({email})
        if(emailExist) return res.status(400).json({message:'Email alrady exists'})

        const newDoctor = new Doctor(data)
        await newDoctor.save()
        res.status(201).json({ message: 'Patient registered successfully' })

    }catch(err){
        console.error(err)
        res.status(500).json({error:'Server error'})
    }
}

//login
const loginDoctor = async(req,res)=>{
    try{
        const {email , password} = req.body
        const doctor = await Doctor.findOne({email})
        if(!doctor || doctor.password !== password){
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        res.status(200).json({ message: 'Login successful', doctor })
    }catch(err){
        console.error(err)
        res.status(500).json({error:'Server error'})
    }
}

module.exports = {registerDoctor,loginDoctor}
