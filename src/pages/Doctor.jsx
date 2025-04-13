
import NonHomeNav from '../components/Header_Footer/NonHomeNav'
import React, {useEffect , useState} from 'react'

const Doctor = () => {

  const [user , setUser] = useState('')

  useEffect(()=>{
    const storedUser = localStorage.getItem('user')
    setUser(storedUser)
  },[]);

  return (
    <>
    <NonHomeNav/>
    <div>
        <h1>DOCTOR</h1>
    </div>

    <div>
      <h5>{user}</h5>
    </div>
   
    </>
    
  )
}

export default Doctor