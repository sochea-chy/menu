<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function list(Request $request)
    {
        $query = $request->q;
        $order = Order::where('id', 'like', '%' . $query . '%')
            ->orWhere('phone_number', 'like', '%' . $query . '%')
            ->orWhere('seat_number', 'like', '%' . $query . '%')
            ->orWhere('total', 'like', '%' . $query . '%')
            ->orWhere('status', 'like', '%' . $query . '%')
            ->orderBy("created_at", "desc")
            ->get();

        return response()->json([
            'data' => $order,
        ]);
    }

    public function total() {
        $order = Order::all();
        $user = User::all();
        $category = Category::all();
        $product = Product::all();

        return response()->json([
            'order' => count($order),
            'user' => count($user),
            'category' => count($category),
            'prodcut' => count($product),
        ]);
    }
}
