<?php

namespace App\Models;

use App\Helper\mHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LanguageContent extends Model
{
    use HasFactory;
    protected $guarded = [];

    static function InsertAndUpdate($data, $languageId, $chapter, $chapterSub, $dataId){
        LanguageContent::create(['value'=>$data,'languageId'=>$languageId,'chapter'=>$chapter,'chapterSub'=>$chapterSub,'dataId'=>$dataId]);
    }

    static function getName($chapter,$dataId,$languageId){
        //$langaugeId = mHelper::getLanguageId();
        $chapterSub = NAME_LANGUAGE;
        $getName = LanguageContent::where('languageId',$languageId)->where('chapter',$chapter)->where('chapterSub',$chapterSub)->where('dataId',$dataId)->count();
        if ($getName!=0){
            $w = LanguageContent::where('languageId',$languageId)->where('chapter',$chapter)->where('chapterSub',$chapterSub)->where('dataId',$dataId)->get();
            return $w[0]['value'];
        }
    }

    static function getDesc($chapter, $dataId, $languageId){
        $chapterSub = DESCRIPTION_LANGUAGE;
        $getDesc = LanguageContent::where('languageId',$languageId)->where('chapter',$chapter)->where('chapterSub',$chapterSub)->where('data',$dataId)->count();
        if ($getDesc!=0){
            $w = LanguageContent::where('languageId',$languageId)->where('chapter',$chapter)->where('chapterSub',$chapterSub)->where('data',$dataId)->get();
            return $w[0]['value'];
        }
    }
}
