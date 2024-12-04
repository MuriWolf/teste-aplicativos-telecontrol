<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Usuario;

class AuthController extends Controller
{
    public function signup(Request $request) {
        try {
            $request->validate( [
                'nome' => 'required|string|max:100',
                'email' => 'required|email|max:320',
                'senha' => 'required|string|max:100',
            ]);

            $usuario = Usuario::create([
                'nome' => $request->nome,
                'email'=> $request->email,
                'senha'  => hash::make($request->senha)
            ]);

            return response()->json(['message' => 'Usuário criado com sucesso!'], 201);   
        } catch (\Illuminate\Database\UniqueConstraintViolationException $e) {
            return response()->json(['message'=> 'Usuário já existe! Tente outro.'], 409);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['message'=> $e->getMessage()], 409);
        }
    }

    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email|max:320',
            'senha' => 'required|string|max:100',
        ]);

        $usuario = Usuario::where('email', $request->email)->first();

        if (!$usuario || !Hash::check($request->senha, $usuario->senha)) {
            return response()->json(['message' => 'Credenciais inválidas!'], 401);
        }

        $usuario->tokens()->delete();

        return response()->json([
            'status' => true,
            'message' => 'Usuário identificado com sucesso!',
            'nome' => $usuario->nome,
            'token' => $usuario->createToken('auth_token')->plainTextToken,
            ], 200);
    }

    public function show(Request $request, $id) {
        try {
            $usuario = Usuario::where('id', $id)->first();
            
            return response()->json(['id' => $usuario->id, 'email' => $usuario->email, 'nome' => $usuario->nome], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Usuário não foi encontrado'], 404);
        } catch (\Exception $e) {
            return response()->json(['message'=> $e->getMessage()], 400);
        }
    }
}
