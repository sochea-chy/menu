<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'discription',
        'image',
        'price'
    ];

    use HasFactory;
    public function category() {
        return $this->belongsTo(Category::class, "category_id");
    }
}
