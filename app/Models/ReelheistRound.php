<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Model as Eloquent;
use App\Models\ReelheistData;

class ReelheistRound extends Eloquent
{

    protected $table = 'redtiger_round';
    protected $timestamp = true;
    protected $connection = 'pgsql';
    protected $primaryKey = 'round_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'round_id',
        'round_type',
        'debit',
        'credit',
        'steps',
    ];

    protected $casts = [
        'enabled' => 'boolean',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function process_new_template($game_id, $data)
    {
        $game = json_decode(json_encode($data), true);
            $model = new self();
            if($game['process_data']['game_type'] === "[]") {
                $game_type = "normal";
            }
            $round_id = $game['process_data']['round_id'];

            $model->round_id = $round_id;
            $model->round_type = "normal";
            $model->debit = (int) $game['process_data']['debit'];
            $model->credit = (int) $game['process_data']['credit'];
            $model->steps = 1;
            $model->created_at = now();
            $model->updated_at = now();
            $model->save();

            $data = new \App\Models\ReelheistData;
            $data->round_id = $round_id;
            $data->round_data = $game['process_data']['game_data'];
            $data->step = 1;
            $data->save();
            return $model;
    }

    public function morph_array($data)
    {
        if ($data instanceof Arrayable) {
            return $data->toArray();
        }
        return $data;
    }
    public function round_datas()
    {
        return $this->hasMany(ReelheistData::class, 'round_id');
    }
}
