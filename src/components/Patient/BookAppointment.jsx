import React from 'react'
import axios from 'axios'
import { useEffect ,useState} from 'react'

const BookAppointment = () => {
    const [doctors, setDoctors] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:5000/api/doctor/getDoctors').then((res)=>{
            console.log('Fetched doctors',res.data)
            setDoctors(res.data)

        }).catch((err)=>{
            console.error('fetching error in doctors',err)
        })
    },[])


  return (
    <div>
    <h2>Available Doctors</h2>
    {doctors.map((doc, idx) => (
      <div key={idx}>
        <p>{doc.firstName} {doc.lastName}</p>
        <p>Email: {doc.email}</p>
        <hr />
      </div>
    ))}
  </div>
  )

}

export default BookAppointment