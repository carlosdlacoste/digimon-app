import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/home.jsx';
import { Login } from './pages/login.jsx';
import { SignUp } from './pages/signup.jsx';
import { NavBar } from './react-components/navbar.jsx';
import { Footer } from './react-components/footer.jsx';
import { DigimonDetails } from './pages/digimonDetails.jsx';

function App() {
  const [token, setToken] = useState(null);

  const handleTokenChange = newToken => {
    setToken(newToken);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar storedToken={token} handleToken={handleTokenChange}/>
        <div style={{minHeight: "100vh"}}>
          <Routes>
            <Route element={<Home storedToken={token} handleToken={handleTokenChange}/>} path='/'/>
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<DigimonDetails />} path="/digimon/:id" />
          </Routes>
        </div>
        <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App
