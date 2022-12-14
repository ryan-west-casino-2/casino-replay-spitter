<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;
use App\Models\RedtigerData;

class RedtigerRound extends Eloquent
{

    protected $table = 'redtiger_round';
    protected $timestamp = true;
    protected $connection = 'pgsql';
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'gid',
        'round_id',
        'round_type',
        'debit',
        'credit',
        'steps',
    ];


    protected $hidden = [
        'id',
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
            $model->gid = $game['process_data']['gid'];
            $model->round_type = "normal";
            $model->debit = (int) $game['process_data']['debit'];
            $model->credit = (int) $game['process_data']['credit'];
            $model->steps = 1;
            $model->created_at = now();
            $model->updated_at = now();
            $model->save();
 
            $gamedata = new RedtigerData;
            $gamedata->round_id = $model->id;
            $gamedata->round_data = $game['process_data']['game_data'];
            $gamedata->step = 1;
            $gamedata->save();
            return $model;
    }

    public function morph_array($data)
    {
        if ($data instanceof Arrayable) {
            return $data->toArray();
        }
        return $data;
    }
}
