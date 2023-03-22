<?php

namespace App\Http\Controllers;

use App\Models\Seat;
use Illuminate\Http\Request;

class SeatController extends Controller
{
    public function list(Request $request)
    {
        $query = $request->q;
        $seat = Seat::where('id', 'like', '%' . $query . '%')
            ->orWhere('name', 'like', '%' . $query . '%')
            ->orWhere('seat_number', 'like', '%' . $query . '%')
            ->orderBy("created_at", "desc")
            ->get();;
        return response()->json([
            'data' => $seat,
        ]);
    }

    public function create(Request $request)
    {
        $seat = Seat::create([
            'name' => $request->name,
            'discription' => $request->discription,
            'seat_number' => $request->seat_number,
        ]);
        return response()->json([
            'seat' => $seat,
        ]);
    }

    public function edit(Request $request, $id)
    {
        $seat = Seat::find($id);
        $seat->update([
            'name' => $request->name,
            'discription' => $request->discription,
            'seat_number' => $request->seat_number,
        ]);
        return response()->json([
            'Seat' => $seat,
        ]);
    }

    public function destroy($id)
    {
        $seat = Seat::find($id);
        $seat->delete();
        return response()->json([
            'message' => "deleted",
        ]);
    }
}
