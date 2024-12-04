<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrdemServico extends Model
{
    use HasFactory;
    protected $fillable = [
        'numero_ordem',
        'data_abertura',
        'nome_consumidor',
        'cpf_consumidor',
        'produto_codigo',
        'defeito_reclamado',
        'solucao_tecnica'
    ];

    protected $primaryKey = 'numero_ordem';
    public $incrementing = true;
    protected $keyType = 'integer';

    public $timestamps = false;
}
