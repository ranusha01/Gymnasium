import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Main from "./Pages/Dashboard/Main.jsx";

const App = () => {
 
  
  return (
   
   
   <Routes>
  
    <Route path='/' element={<Home />} />
    
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/main" element={<Main />} />
   </Routes>
  
  
  )
}

export default App