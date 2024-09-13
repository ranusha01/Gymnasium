import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Home/Main';
 

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    
  );
}

export default App;
