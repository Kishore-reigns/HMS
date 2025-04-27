
const Admin = require('../Models/Admin')
const Patient = require('../Models/Patient')
const Doctor = require('../Models/Doctor')

// register
const registerAdmin = async(req,res) =>{
    try{

        const data = req.body
        const {email} = data

        const emailExist = await Admin.findOne({email})
        if(emailExist) return res.status(400).json({message:'Email alrady exists'})

        const newAdmin = new Admin(data)
        await newAdmin.save()
        res.status(201).json({ message: 'Patient registered successfully' })

    }catch(err){
        console.error(err)
        res.status(500).json({error:'Server error'})
    }
}

// login 

const loginAdmin = async(req,res) =>{
    try{
        const {email , password} = req.body
        const admin = await Admin.findOne({email})
        if(!admin || admin.password !== password){
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        res.status(200).json({ message: 'Login successful', admin })

    }catch(err){
        console.error(err)
        res.status(500).json({error:'Server error'})
    }
}


// forgot password

const Forgot = async(req,res)=>{
    try{
        const {email ,petName, password} = req.body
        const user = await Admin.findOne({email})
        
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


// delete patient
const deletePatient = async(req,res) => {
    try{

        const {email} = req.params ;
        const deletedPatient = await Patient.findOneAndDelete({email});

        if(!deletedPatient){
            return res.status(404).json({message:'Patient not found'})
        }
        res.status(200).json({message:'Patient deleted successfully'})

    }catch(err){
        console.error(err)
        res.status(500).json({error:'server error'})
    }
}

// delete doctor
const deleteDoctor = async(req,res) => {
    try{

        const {email} = req.params ;
        const deletedDoctor = await Doctor.findOneAndDelete({email});

        if(!deletedDoctor){
            return res.status(404).json({message:'Doctor not found'})
        }
        res.status(200).json({message:'Doctor deleted successfully'})

    }catch(err){
        console.error(err)
        res.status(500).json({error:'server error'})
    }
}



module.exports = { registerAdmin, loginAdmin,Forgot,deleteDoctor,deletePatient}