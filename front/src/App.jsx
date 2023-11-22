import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/home.jsx';
import { Login } from './pages/login.jsx';
import { SignUp } from './pages/signup.jsx';

function App() {

  // const basename = process.env.FRONTEND_URL || "";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
