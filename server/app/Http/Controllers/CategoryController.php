<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function list(Request $request)
    {
        $query = $request->q;

        $category = Category::where('id', 'like', '%' . $query . '%')
                    ->orWhere('name', 'like', '%' . $query . '%')
                    ->orWhere('discription', 'like', '%' . $query . '%')
                    ->orderBy("created_at", "desc")
                    ->get();
        return response()->json([
            'data' => $category,
        ]);
    }

    public function create(Request $request)
    {
        $category = Category::create([
            'name' => $request->name,
            'discription' => $request->discription,
            'image' => $request->image,
        ]);
        return response()->json([
            'category' => $category,
        ]);
    }

    public function edit(Request $request, $id)
    {
        $category = Category::find($id);
        $category->update([
            'name' => $request->name,
            'discription' => $request->discription,
            'image' => $request->image,
        ]);
        return response()->json([
            'category' => $category,
        ]);
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
        return response()->json([
            'message' => "deleted",
        ]);
    }
}
