
import './App.css';
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Role from './pages/Role';
import PatientRegisterForm from './components/Login_Register/PatientRegisterForm';
import DoctorRegisterForm from './components/Login_Register/DoctorRegisterForm';
import AdminRegisterForm from './components/Login_Register/AdminRegisterForm';
import CommonLoginForm from './components/Login_Register/CommonLoginForm';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';
import Admin from './pages/Admin';
import About from './pages/About';
import Contact from './pages/Contact' ;
import ForgetPassword from './components/Login_Register/ForgetPassword';
import BuyNow from './pages/BuyNow';

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path="/role_login" element={<Role type='login'/>} />
      <Route path="/role_register" element={<Role type ='register'/>} />
      <Route path="/role/PatientRegister" element={<PatientRegisterForm/>} />
      <Route path="/role/DoctorRegister" element={<DoctorRegisterForm />} />
      <Route path="/role/AdminRegister" element={<AdminRegisterForm />} />

      <Route path="/role/PatientLogin" element={<CommonLoginForm type='patient'/>} />
      <Route path="/role/DoctorLogin" element={<CommonLoginForm type='doctor'/>} />
      <Route path="/role/AdminLogin" element={<CommonLoginForm type='admin'/>} />

      <Route path='/forgotpassword_patient' element={ <ForgetPassword type='patient'/> } />
      <Route path='/forgotpassword_doctor' element={ <ForgetPassword type='doctor'/> } />
      <Route path='/forgotpassword_admin' element={ <ForgetPassword type='admin'/> } />
      
      <Route path='/patient' element={<Patient/>}/>
      <Route path='/doctor' element={<Doctor/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/buyNow' element={<BuyNow/>}></Route>

    </Routes>
  );
}

export default App;
