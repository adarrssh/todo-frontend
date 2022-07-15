
import './App.css';
import Homepage from "./components/homepage/Homepage"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [user, setLoginUser] = useState({}) 
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/'
          element=
          {!user.name?<Navigate replace to={"/login"}/>:<Homepage user={user}/> }          
          />
          <Route exact path='/login' element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;