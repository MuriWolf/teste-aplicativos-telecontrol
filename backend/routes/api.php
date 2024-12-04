<?php

use App\Http\Controllers\Api\OrdemServicoController;
use App\Http\Controllers\Api\ProdutoController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/ordens-servico', [OrdemServicoController::class, 'index']);
    Route::get('/ordens-servico/{numero_ordem}', [OrdemServicoController::class, 'show']);
    Route::post('/ordens-servico', [OrdemServicoController::class, 'store']);
    Route::patch('/ordens-servico/{numero_ordem}', [OrdemServicoController::class, 'update']);

    Route::get('/produtos', [ProdutoController::class, 'index']);
    Route::get('/produtos/{codigo}', [ProdutoController::class, 'show']);
    Route::post('/produtos', [ProdutoController::class, 'store']);
    Route::put('/produtos/{codigo}', [ProdutoController::class, 'update']);

    Route::get('/usuario/{id}', [AuthController::class, 'show']);
});

Route::post('/cadastrar', [AuthController::class, 'signup']);
Route::post('/entrar', [AuthController::class, 'login']);