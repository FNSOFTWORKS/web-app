<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LanguageContent extends Model
{
    use HasFactory;
    protected $guarded = [];

    static function InsertAndUpdate($data, $languageId, $chapter, $chapterSub, $dataId){
        LanguageContent::create(['languageId'=>$languageId,'chapter'=>$chapter,'chapterSub'=>$chapterSub,'value'=>$data,'dataId'=>$dataId]);
    }
}
