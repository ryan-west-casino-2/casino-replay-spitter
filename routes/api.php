<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/show_games', function () {

    $model = new \App\Models\RedtigerRound;
    $round = $model->first();
    $data = new \App\Models\RedtigerData;
    $game_data = $data->where('round_id', $round->id)->first();
    return json_decode($game_data->round_data, JSON_UNESCAPED_SLASHES);
});



        Route::match(['get', 'post', 'head', 'patch', 'put', 'delete'] , 'proxy/{slug}', function(Request $request){

        // To redirect the request to a different host, the first parameter will be the host.
        // the second, will be the current path that we want to ignore, it must be the url of the controller (api/proxy)
        //so we're telling you that the new url will be:
        // (host) http://my.server2.test + (deleted)[api/proxy] + ({slug}) /api/avatar/color
        return ProxyHelperFacade::CreateProxy($request)->toHost('http://my.server2.test','api/proxy');
        
        //other way is to tell him the url directly.
        return ProxyHelperFacade::CreateProxy($request)->toUrl('http://my.server2.test/api/avatar/color');
        
        // this second way will no longer be dynamic.
        

    })->where('slug', '([A-Za-z0-9\-\/]+)');