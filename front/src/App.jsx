import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/home.jsx';
import { Login } from './pages/login.jsx';
import { SignUp } from './pages/signup.jsx';
import { NavBar } from './react-components/navbar.jsx';
import { Footer } from './react-components/footer.jsx';
import { DigimonDetails } from './pages/digimonDetails.jsx';

function App() {

  // const basename = process.env.FRONTEND_URL || "";

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<DigimonDetails />} path="/digimon/:id" />
        </Routes>
        <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App
