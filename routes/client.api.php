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
Route::group([
    'prefix'=>'auth'
],function(){
    Route::post('login',[\App\Http\Controllers\API\v1\LoginController::class,'login']);
    Route::post('register',[\App\Http\Controllers\API\v1\RegisterController::class,'register']);
});

Route::group([
    'middleware'=>['auth:client-api','scopes:client']
],function(){
    Route::post('/authenticate',[\App\Http\Controllers\API\v1\AuthController::class,'authenticate']);
    Route::resource('language',\App\Http\Controllers\API\v1\Settings\Languages\indexController::class);
});


