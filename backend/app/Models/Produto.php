<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;
    protected $fillable = [
        'codigo',
        'nome',
        'tempo_garantia',
        'status'
    ];

    protected $primaryKey = 'codigo';
    public $incrementing = false;
    protected $keyType = 'string';

    public $timestamps = false;
}
