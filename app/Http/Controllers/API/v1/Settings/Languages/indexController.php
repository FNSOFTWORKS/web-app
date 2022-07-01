<?php

namespace App\Http\Controllers\API\v1\Settings\Languages;

use App\Http\Controllers\Controller;
use App\Models\Languages;
use Illuminate\Http\Request;

class indexController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = request()->user();
        $data = Languages::all();

        return response()->json([
            'success'=>true,
            'user'=>$user,
            'data'=>$data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
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
        $create = Languages::create($all);
        if($create){
            return response()->json([
                'success'=>true,
                'message'=>'Ürün Başarı ile Eklendi'
            ]);
        }
        else
        {
            return response()->json([
                'success'=>false,
                'message'=>'Ürün Eklenemedi'
            ]);
        }
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
