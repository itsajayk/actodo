import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import { useState } from "react";

  function App() {
    // Initialize a state variable 'users' to store the user data and a setter function 'setusers'
    const[users,setusers] = useState(
      [
          {
            username:"Ajay",
            password:"123"
          }
      ]
    )
  
    // Return the JSX to be rendered
    return ( 
      <div>
      <BrowserRouter>
          
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
          <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}> </Route>
          <Route path='/landing' element={<Landing/>}> </Route>
        </Routes>
        
      </BrowserRouter>
      </div>
    );
  }

export default App;
