<?php

namespace App\Http\Controllers\API\App\v1\Contents\Blog;

use App\Http\Controllers\Controller;
use App\Models\Languages;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function view(){
        $languages = Languages::all();
        return response()->json(['success'=>$languages]);
    }
}
