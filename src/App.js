
import './App.css';
import Homepage from "./components/homepage/Homepage"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { Navigate } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import { useState, useEffect } from 'react';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  
  // stores the user object
  const [userLogin, setLoginUser] = useState({
    name:"fads",
    email:"pass",
    password:"passwrod"
  })

  const [load, setLoad]=useState(true)

  // looking for user in localstorage when the website loads up
  useEffect(() => {
    let retrievedObject = localStorage.getItem('user');
      console.log(retrievedObject);
      setLoginUser(JSON.parse(retrievedObject));
      setTimeout(()=>{
        setLoad(false)
      },3000)
    
  }, [])


  if(load){
    return (
      <Loading/>
    )
  }
  
  // stores the user in localstorage
  const setLocalStorage = (data) => {
    var testObject = data;
    localStorage.setItem('user', JSON.stringify(testObject))
  }
  
  console.log(userLogin);
  return (
    <div className="App">
      <Routes>
        <Route exact path='/'
          element=
          {!userLogin ? <Navigate replace to={"/login"} /> : <Homepage user={userLogin} />}
          />
        <Route exact path='/login' element={<Login setLoginUser={setLoginUser} setLocalStorage={setLocalStorage} />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
