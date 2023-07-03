<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RegistroRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegistroRequest $request){
        //Validacación del Registro
        $data = $request->validated();

        //Crear el usuario 
        $user = User::create([
            'name'  =>$data['name'],
            'email'  =>$data['email'],
            'password'  => bcrypt($data['password'])

        ]);

        //Devolver Respuesta de usuario 
        return [
            'token' => $user->createToken('rockstban')->plainTextToken,
            'user' => $user
        ];
    }
    public function login(LoginRequest $request){
        $data = $request->validated();

        //Revisar el password 

        if(!Auth::attempt($data)){
            return response([
                'errors' => ['El correo o la contraseña son incorrectos(Verifica)']
            ], 422);
        }

        // Autenticamos al usuario si todos es correcto

        $user = Auth::user();
        return [
            'token' => $user->createToken('rockstban')->plainTextToken,
            'user' => $user
        ];

        
        
    }
    public function logout(Request $request){

    }
}
