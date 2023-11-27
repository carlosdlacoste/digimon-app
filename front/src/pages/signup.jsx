import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const SignUp = () =>{
    const [user, setUser] = useState({});
    const navigate = useNavigate()
    
    async function handleAddUser(event, newUser) {
        event.preventDefault()
        const resp = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
        const data = await resp.json()
        console.log(data)
        if(data){
            Swal.fire(
                "Registro exitoso", "Su usuario ha sido creado con éxito", "success"
            )
            navigate("/login")
        }
    }
    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <form className="bg-emerald-400 p-10 lg:w-1/2 md:w-1/2">
                    <h3 className="flex justify-center text-2xl font-bold hover:text-amber-300 border-2 border-amber-500 p-2 mt-1 mb-4">Quieres ser parte del DigiMundo?</h3>
                    <label htmlFor="name" className="font-bold text-sm ml-1">Ingrese su nombre completo</label>
                    <input type="text" id="name" placeholder="Full Name" className="border border-gray-400 p-2 mt-1 mb-4 w-full text-black rounded-lg" onChange={(event) =>setUser({...user, name:event.target.value})} value={user.name || ''}/>
                    <label htmlFor="email" className="font-bold text-sm ml-1">Ingrese su email</label>
                    <input type="text" id="email" placeholder="Email" className="border border-gray-400 p-2 mt-1 mb-4 w-full text-black rounded-lg" onChange={(event) =>setUser({...user, email: event.target.value})} value={user.email || ''}/>
                    <label htmlFor="password" className="font-bold text-sm ml-1">Ingrese su contraseña</label>
                    <input type="password" id="password" placeholder="Password" className="border border-gray-400 p-2 mb-4 mt-1 w-full text-black rounded-lg" onChange={(event) => setUser({...user, password: event.target.value})} value={user.password || ''}></input>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex mx-auto" onClick={(event) => handleAddUser(event, user)}>Crear Digi-Elegido</button>
                </form>
            </div>
        </>
    )
}