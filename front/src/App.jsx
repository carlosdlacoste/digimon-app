import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/home.jsx';
import { Login } from './pages/login.jsx';
import { SignUp } from './pages/signup.jsx';
import { NavBar } from './react-components/navbar.jsx';
import { Footer } from './react-components/footer.jsx';
import { DigimonList } from './react-components/digimonList.jsx';
import { DigimonCard } from './react-components/digimonCard.jsx';

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
          <Route element={<DigimonList />} path="/digiapi" />
          <Route element={<DigimonCard />} path="/digicard" />
        </Routes>
        <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App
