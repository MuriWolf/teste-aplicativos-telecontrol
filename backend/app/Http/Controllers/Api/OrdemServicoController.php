<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\OrdemServico;
use Illuminate\Http\Request;

class OrdemServicoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ordens = OrdemServico::all();
        return response()->json([
            'ordens_servico' => $ordens
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            // 'numero_ordem' => 'required|integer',
            'data_abertura' => 'required',
            'nome_consumidor' => 'required|string|max:100',
            'cpf_consumidor' => 'required|string|max:11',
            'produto_codigo'=> 'required|exists:produtos,codigo',
        ]);

        $ordem = OrdemServico::create($request->all());

        return response()->json([
            'message' => 'Ordem criada com sucesso!',
            'ordem_servico' => $ordem,    
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($numero_ordem)
    {
        try {
            $ordem = OrdemServico::findOrFail($numero_ordem);

            return response()->json($ordem, 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Ordem de serviço não foi encontrada'], 404);
        } catch (\Exception $e) {
            return response()->json(['message'=> $e->getMessage()], 400);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrdemServico $ordemServico)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {   
        try {
            $request->validate([
                'defeito_reclamado' => 'required|string|max:2000',
                'solucao_tecnica'=> 'required|string|max:2000',
            ]);

            $ordem = OrdemServico::findOrFail($id);
            $ordem->update($request->all());
            return response()->json($ordem,200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Ordem de serviço não foi encontrada'], 404);
        } catch (\Exception $e) {
            return response()->json(['message'=> $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrdemServico $ordemServico)
    {
        //
    }
}
