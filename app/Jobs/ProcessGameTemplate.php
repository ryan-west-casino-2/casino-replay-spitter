<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessGameTemplate implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    private string $game_id;
    private string $game_model_round;
    private array $game_result;

    public function __construct($game_id, $game_result)
    {
        $this->game_model_round = '\App\Models\RedtigerRound';
        $this->game_id = $game_id;
        $this->game_result = $game_result;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $model = new $this->game_model_round;
        $data = ["process_data" => $this->game_result[0]];
        return $model->process_new_template($this->game_id, $data);
    }
}
