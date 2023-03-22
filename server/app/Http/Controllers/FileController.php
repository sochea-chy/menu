<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    public function upload(Request $request) {
        $url = config("app.key_image_url");
        if($request->hasFile('image')){
            $image = $request->file('image');
            $filename = time(). '.' .$image->getClientOriginalExtension();
            $dest = public_path('images');
            $image -> move($dest,$filename);
            return $url."/"."images/".$filename;
        }else{
            $filename='none';
        }
    }
}
