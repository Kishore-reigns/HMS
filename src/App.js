import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './components/Login_Register/Login';
import Register from './components/Login_Register/Register';
function App() {
  return (
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/register' element = {<Register/>}/>
    </Routes>
  );
}

export default App;
