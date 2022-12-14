<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('redtiger_round', function (Blueprint $table) {
            $table->id();
            $table->string('gid');
            $table->string('round_id')->unique();
            $table->integer('credit');
            $table->integer('debit');
            $table->integer('steps');
            $table->string('round_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('redtiger_round');
    }
};
