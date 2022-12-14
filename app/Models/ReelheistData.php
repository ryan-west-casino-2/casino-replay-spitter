<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\ReelheistRound;
use \Illuminate\Database\Eloquent\Model as Eloquent;

class ReelheistData extends Eloquent
{
    protected $table = 'reelheist_data';
    public $timestamps = false;
    protected $connection = 'pgsql_imported';
    protected $primaryKey = 'id';


    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'round_id',
        'round_data',
        'step',
    ];
    protected $casts = [
        'round_data' => 'json',
    ];

    public function round_id()
    {
        return $this->belongsTo(ReelheistRound::class, 'round_id');
    }
}
