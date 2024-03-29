import { useState} from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const saveTokenSessionStorage = (token) => {
        sessionStorage.setItem('MiToken', token);
    };


    async function handleLogIn (event, findEmail, findPassword) {
        event.preventDefault()
        const resp = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/login", {
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

            const token = data.token
            saveTokenSessionStorage(token)
            Swal.fire(
                "Bienvenido!", "Su usuario ha sido autenticado", "success"
            )
            navigate('/')
        }
    }

    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <form className="bg-emerald-400 p-10 lg:w-1/2 md:w-1/2">
                    <h3 className="flex justify-center text-2xl font-bold hover:text-amber-300 border-2 border-amber-500 p-2 mt-1 mb-4">Bienvenido Digi-Elegido!</h3>
                    <label htmlFor="email" className="font-bold text-sm ml-1">Ingrese su email</label>
                    <input type="text" id="email" placeholder="Email" className="border border-gray-400 p-2 mt-1 mb-4 w-full text-black rounded-lg" onChange={(event) => setEmail(event.target.value)} value={email} autoComplete="off"/>
                    <label htmlFor="password" className="font-bold text-sm ml-1">Ingrese su contraseña</label>
                    <input type="password" id="password" placeholder="Password" className="border border-gray-400 p-2 mb-4 mt-1 w-full text-black rounded-lg" onChange={(event) => setPassword(event.target.value)} value={password} autoComplete="off"></input>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex mx-auto" onClick={(event) => handleLogIn(event, email, password)}>Ingresar</button>
                </form>
            </div>
        </>
    )
}