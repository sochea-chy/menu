<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function list(Request $request)
    {
        $query = $request->q;
        $product = Product::with(['category'])
            ->orWhere('name', 'like', '%' . $query . '%')
            ->orWhere('price', 'like', '%' . $query . '%')
            ->orderBy("created_at", "desc")
            ->get();;
        return response()->json([
            'data' => $product,
        ]);
    }

    public function listByCategory(Request $request, $category_id)
    {
        $product = Product::with(['category'])->where('category_id', $category_id)->orderBy("created_at", "desc")->get();
        return response()->json([
            'data' => $product,
        ]);
    }

    public function create(Request $request)
    {
        $product = Product::create([
            'category_id' => $request->category_id,
            'name' => $request->name,
            'discription' => $request->discription,
            'image' => $request->image,
            'price' => $request->price,
        ]);
        return response()->json([
            'product' => $product,
        ]);
    }

    public function edit(Request $request, $id)
    {
        $product = Product::find($id);
        $product->update([
            'category_id' => $request->category_id,
            'name' => $request->name,
            'discription' => $request->discription,
            'image' => $request->image,
            'price' => $request->price,
        ]);
        return response()->json([
            'product' => $product,
        ]);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return response()->json([
            'message' => "deleted",
        ]);
    }
}
