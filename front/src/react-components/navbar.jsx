import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {

    const [storedToken, setStoredToken] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const currentToken = sessionStorage.getItem('MiToken')
            setStoredToken(currentToken)
    }, [storedToken]);

    const deleteTokenSessionStorage = (token) => {
        sessionStorage.removeItem('MiToken', token);
    };

    async function handleLogOut (event) {
        event.preventDefault()
        const resp = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + storedToken
            },
        })
        const data = await resp.json()
        if(data){

            console.log(data)
            
            deleteTokenSessionStorage(storedToken)
            setInterval(() => {
                window.location.reload();
            }, 1000);
            navigate('/')
        }
    }


    return(
        <>
                <div className="navbar bg-amber-400">
                
                    <div className="navbar-start">
                        <Link to="/" className="rotate-12">
                            <span className="p-2 ml-2 text-xl shadow-xl bg-red-600 rounded-full">DigiDex</span>
                        </Link>
                    </div>
                    <div className="navbar-end gap-x-3">
                    {
                        !storedToken ?
                        <>
                                <Link to="/login">
                                    <button className="btn bg-emerald-500">Log In</button>
                                </Link>
                                <Link to="/signup">
                                    <button className="btn border-emerald-500">Sign Up</button>
                                </Link>
                        </>   
                        :
                        <>
                            <button className="btn bg-red-600" onClick={(event) => handleLogOut(event)}>Log Out</button>
                        </>
                    }
                    </div>
                </div>
        </>
    )
}