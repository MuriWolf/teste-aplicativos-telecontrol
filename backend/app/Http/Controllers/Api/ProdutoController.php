<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ordens = Produto::all();
        return response()->json([
            'produtos' => $ordens
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'codigo' => 'required|string|max:60',
            'nome' => 'required:string|max:200',
            'tempo_garantia' => 'required|date',
            'status' => 'required|boolean',
        ] );

        $produto = Produto::create($request->all());

        return response()->json([
            'message' => 'Produto criado com sucesso!',
            'produto' => $produto,    
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($codigo)
    {
        $ordem = Produto::findOrFail($codigo);

        return response()->json($ordem, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produto $produto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $codigo)
    {
        $request->validate([
            'codigo' => 'required|string|max:60',
            'nome' => 'required:string|max:200',
            'tempo_garantia' => 'required|date',
            'status' => 'required|boolean',
        ]);

        $produto = Produto::findOrFail($codigo);
        $produto->update($request->all());
        return response()->json($produto,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produto $produto)
    {
        //
    }
}
