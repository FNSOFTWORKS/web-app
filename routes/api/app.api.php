<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/blog',[\App\Http\Controllers\API\App\v1\Contents\Blog\PostController::class,'index']);
Route::post('/blog/info',[\App\Http\Controllers\API\App\v1\Contents\Blog\PostController::class,'getInfo']);

