<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use RuntimeException;
use Symfony\Component\Process\Process;
class ImportGameTemplate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bowie-rtg:import-game-template';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import game templates from dump.sql';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
            $dispatch = new \App\Jobs\ProcessGameDispatcher();
            $dispatch->dispatch();
    }
}
