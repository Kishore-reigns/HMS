
import './App.css';
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Role from './pages/Role';

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/register' element = {<Register/>}/>
      <Route path="/role" element={<Role />} />

    </Routes>
  );
}

export default App;
