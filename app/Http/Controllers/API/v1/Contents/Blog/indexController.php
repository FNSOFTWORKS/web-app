<?php

namespace App\Http\Controllers\API\v1\Contents\Blog;

use App\Http\Controllers\Controller;
use App\Models\Blogs;
use App\Models\LanguageContent;
use App\Models\Languages;
use Illuminate\Http\Request;

class indexController extends Controller
{
    public function index()
    {
        $user = request()->user();
        $data = Blogs::all();

        return response()->json([
            'success'=>true,
            'user'=>$user,
            'data'=>$data
        ]);
    }

    public function create()
    {
        $user = request()->user();
        return response()->json([
            'success'=>true
        ]);
    }

    public function store(Request $request)
    {
        $user = request()->user();
        $all = $request->all();


        $array = [
            'isShow'=>$all['isShow'],
            'date'=>$all['date'],
            'categoryId'=>$all['categoryId']
        ];
        $create = Blogs::create($array);

        if ($create){
            $languages = Languages::all();
            foreach ($languages as $k => $v){
                LanguageContent::InsertAndUpdate($all['name_'.$languages[$k]['id']], $all['languageId_'.$languages[$k]['id']], BLOG_LANGUAGE, NAME_LANGUAGE, $create['id']);
                LanguageContent::InsertAndUpdate($all['text_'.$languages[$k]['id']], $all['languageId_'.$languages[$k]['id']], BLOG_LANGUAGE, TEXT_LANGUAGE, $create['id']);
            }
        }

        //LanguageContent::InsertAndUpdate($all['name_'.$languages[]['id']], $all['languageId_'.$languages[0]['id']], BLOG_LANGUAGE, NAME_LANGUAGE, 111);
        /*$array = [
            'isShow'=>$all['isShow'],
            'date'=>$all['date'],
            'categoryId'=>$all['categoryId']
        ];
        $create = Blogs::create($array);

        if($create){
            LanguageContent::InsertAndUpdate($all['title'], BLOG_LANGUAGE, TEXT_LANGUAGE, $create->id);

            return response()->json([
                'success'=>true,
                'message'=>'Added Succesfully'
            ]);
        }
        else {
            return response()->json([
                'success'=>false,
                'message'=>'Added Not Succcesfully'
            ]);
        }*/
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
