<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test2', function () {

    $round_id = rand('500', '50000000');
    $model = new \App\Models\ReelheistRound;
    $model->round_id = $round_id;
    $model->round_type = "normal";
    $model->debit = "100";
    $model->credit = "3000";
    $model->steps = 1;

    $model->created_at = now();
    $model->updated_at = now();
    $model->save();
    return $model;
});
Route::get('/test3', function (Request $request) {

    $round_id = $request->roundid;
    $model = new \App\Models\ReelheistData;
    $model->round_id = $round_id;
    $model->round_data = '[]';
    $model->step = 1;

    $model->save();
    return $model;
});

Route::get('/test5', function (Request $request) {
$db = DB::connection('pgsql_imported')->table('wainwright_gametemplate')->get();
    return $db;
});


Route::get('/test4', function (Request $request) {

    $round_id = $request->roundid;
    $model = new \App\Models\ReelheistData;
    return $model->where('round_id', $round_id)->first();
    $model->round_data = '[]';
    $model->step = 1;

    $model->save();
    return $model;
});


Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
