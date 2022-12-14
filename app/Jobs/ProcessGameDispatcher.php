<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use App\Jobs\ProcessGameTemplate;
class ProcessGameDispatcher implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    private string $game_id;
    private string $game_model_round;

    public function __construct()
    {
        $this->game_model_round = '\App\Models\RedtigerRound';
        $this->game_id = 'redtiger:ReelHeist';
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $raw_data = collect(DB::connection('pgsql_imported')->table('wainwright_gametemplate')->where('gid', $this->game_id)->get());
        $raw = $raw_data->random(5);
        foreach($raw as $game_result)
        {
            ProcessGameTemplate::dispatch($game_result->gid, array($game_result));
        }
    }

}
