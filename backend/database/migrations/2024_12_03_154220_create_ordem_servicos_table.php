<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ordem_servicos', function (Blueprint $table) {
            $table->id('numero_ordem');
            $table->dateTime('data_abertura')->useCurrent();
            $table->string('nome_consumidor', 100);
            $table->string('cpf_consumidor',11);
            $table->string('produto_codigo', 60);
            $table->string('defeito_reclamado', 2000)->nullable();
            $table->string('solucao_tecnica',2000)->nullable();

            $table->foreign('produto_codigo')->references('codigo')->on('produtos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ordem_servicos');
    }
};
