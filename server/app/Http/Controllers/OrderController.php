<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon; 

class OrderController extends Controller
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

    public function orderByphoneNumber(Request $request, $phone_number)
    {
        $order = Order::where('phone_number', $phone_number)->orderBy("created_at", "desc")->get();
        return response()->json([
            'data' => $order,
        ]);
    }

    public function create(Request $request)
    {
        $order = Order::create([
            'phone_number' => $request->phone_number,
            'seat_number' => $request->seat_number,
            'product' => json_encode($request->product),
            'total' => $request->total,
            'status' => $request->status,
        ]);
        return response()->json([
            'order' => [
                'id' => $order->id,
                'phone_number' => $order->phone_number,
                'seat_number' => $order->seat_number,
                'product' => json_decode($order->product, true),
                'total' => $order->total,
                'status' => $order->status,
            ],
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $order = Order::find($id);
        $order->update([
            'phone_number' => $order->phone_number,
            'seat_number' => $order->seat_number,
            'product' => $order->product,
            'total' => $order->total,
            'status' => $request->status,
        ]);
        return response()->json([
            'order' => [
                'id' => $order->id,
                'phone_number' => $order->phone_number,
                'seat_number' => $order->seat_number,
                'product' => json_decode($order->product, true),
                'total' => $order->total,
                'status' => $request->status,
            ],
        ]);
    }
}
