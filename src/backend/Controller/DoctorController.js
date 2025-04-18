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

// getDoctorsList
const getDoctors = async(req,res)=>{
    try{
        const doctors = await Doctor.find()
        res.json(doctors)
    }catch(err){
        console.error(err)
        res.status(500).json({error:'Server error'})
    }
}

const getDoctorbyEmail = async(req,res)=>{
    try{
        const {email} = req.params 
        console.log(email)
        const doctor = await Doctor.findOne({email})
        if (!doctor) return res.status(404).json({ message: "Doctor not found" })
        res.json(doctor)
    }catch (err) {
        console.error(err)
        res.status(500).json({ error: "Server error" })
    }
}



// forgot password

const Forgot = async(req,res)=>{
    try{
        console.log('entered func')
        const {email ,petName, password} = req.body
        const user = await Doctor.findOne({email})
        if (!user || user.petName !== petName) {
            
            return res.json({ success: false, message: "Invalid email or pet name" });
        }
        user.password = password
        user.confirmPass = password
        await user.save()
        return res.json({ success: true, message: "set successfully" });
    }catch(err){
        console.error(err)
        return res.json({ success: false, message: "Invalid email or pet name" });
    }
}

module.exports = {registerDoctor,loginDoctor,getDoctors,getDoctorbyEmail,Forgot}
