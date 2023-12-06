<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //endpoints para bd sqlite

    // public function index()
    // {
    //     $users = User::all();
    //     return response()->json($users);
    // }

    // public function store(Request $request)
    // {

    //     $user = User::create($request->all());
    //     $user->password = bcrypt($request->password);
    //     $user->save();
    //     return response()->json($user, 201);
    // }

    // public function show($id)
    // {
    //     $user = User::findOrFail($id);
    //     return response()->json($user);
    // }

    // public function update(Request $request, $id)
    // {
    //     $user = User::findOrFail($id);
    //     $user->update($request->all());
    //     return response()->json($user, 200);
    // }

    // public function destroy($id)
    // {
    //     User::destroy($id);
    //     return response()->json(null, 204);
    // }


    //endpoints para bd mysql
    public function register(Request $request)
    {
        // Validar la solicitud
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        try {
        
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);

            return response()->json(['message' => 'Usuario registrado con éxito', 'user' => $user], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }

    public function getAllUsers()
    {
        // Obtener todos los usuarios de la base de datos
        $users = User::all();

        // Puedes enviar una respuesta JSON con la lista de usuarios
        return response()->json(['users' => $users], 200);
    }
}
