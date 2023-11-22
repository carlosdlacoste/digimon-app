import { useState } from "react";

export const Login = () =>{
    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <form className="bg-emerald-400 p-10 lg:w-1/2 md:w-1/2">
                    <h3 className="flex justify-center text-2xl font-bold hover:text-amber-300 border-2 border-amber-500 p-2 mt-1 mb-4">Bienvenido Digi-Elegido!</h3>
                    <label htmlFor="email" className="font-bold text-sm ml-1">Ingrese su email</label>
                    <input type="text" id="email" placeholder="Email" className="border border-gray-400 p-2 mt-1 mb-4 w-full text-black rounded-lg"/>
                    <label htmlFor="password" className="font-bold text-sm ml-1">Ingrese su contraseña</label>
                    <input type="password" id="password" placeholder="Password" className="border border-gray-400 p-2 mb-4 mt-1 w-full text-black rounded-lg"></input>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex mx-auto">Ingresar</button>
                </form>
            </div>
        </>
    )
}