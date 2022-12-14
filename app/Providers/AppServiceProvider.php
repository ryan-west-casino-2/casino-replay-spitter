<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Helpers\ProxyHelper; 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('ProxyHelper', function($app) {
            return new ProxyHelper();
        });   

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
