import { useState, useContext, useEffect } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
// import { Context } from "../store/context";

export const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [isTokenTrue, setIsTokenTrue] = useContext(Context)
    const [storedToken, setStoredToken] = useState("")
    const navigate = useNavigate()

    const saveTokenSessionStorage = (token) => {
        // console.log('Guardando token en sessionStorage:', token);
        sessionStorage.setItem('MiToken', token);
    };

    useEffect(() => {
        const currentToken = sessionStorage.getItem('MiToken')
            setStoredToken(currentToken)
    }, [storedToken]);

    // const getTokenSessionStorage = () => {
    //     return sessionStorage.getItem('token');
    // };

    async function handleLogIn (event, findEmail, findPassword) {
        event.preventDefault()
        const resp = await fetch('http://127.0.0.1:8000/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: findEmail,
                password: findPassword
            })
        })
        const data = await resp.json()
        if(data){

            // console.log(data)
            const token = data.token
            // console.log(token)
            saveTokenSessionStorage(token)
            Swal.fire(
                "Bienvenido!", "Su usuario ha sido autenticado", "success"
            )
            setInterval(() => {
                window.location.reload();
            }, 1000);
            navigate('/')
            // console.log('Contenido de sessionStorage:', sessionStorage.getItem('MiToken'));
            // const storage = getTokenSessionStorage()
            // console.log(storage)
            // setIsTokenTrue(true)
        }
    }

    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <form className="bg-emerald-400 p-10 lg:w-1/2 md:w-1/2">
                    <h3 className="flex justify-center text-2xl font-bold hover:text-amber-300 border-2 border-amber-500 p-2 mt-1 mb-4">Bienvenido Digi-Elegido!</h3>
                    <label htmlFor="email" className="font-bold text-sm ml-1">Ingrese su email</label>
                    <input type="text" id="email" placeholder="Email" className="border border-gray-400 p-2 mt-1 mb-4 w-full text-black rounded-lg" onChange={(event) => setEmail(event.target.value)} value={email}/>
                    <label htmlFor="password" className="font-bold text-sm ml-1">Ingrese su contraseña</label>
                    <input type="password" id="password" placeholder="Password" className="border border-gray-400 p-2 mb-4 mt-1 w-full text-black rounded-lg" onChange={(event) => setPassword(event.target.value)} value={password}></input>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex mx-auto" onClick={(event) => handleLogIn(event, email, password)}>Ingresar</button>
                </form>
            </div>
        </>
    )
}