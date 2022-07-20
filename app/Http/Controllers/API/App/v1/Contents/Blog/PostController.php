<?php

namespace App\Http\Controllers\API\App\v1\Contents\Blog;

use App\Http\Controllers\Controller;
use App\Models\Blogs;
use App\Models\LanguageContent;
use App\Models\Languages;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
        $blogs =  Blogs::where('isShow',ENABLE)->orderBy('date','desc')->paginate(6);
        return response()->json(['blogs'=>$blogs]);
    }

    public function getInfo(Request $request){
        $all = $request->all();
        $name = LanguageContent::getName(BLOG_LANGUAGE,$all['dataId'],$all['languageId']);
        $desc = LanguageContent::getDesc(BLOG_LANGUAGE,$all['dataId'],$all['languageId']);
        return response()->json([
            'name'=>$name,

        ]);
    }
}
