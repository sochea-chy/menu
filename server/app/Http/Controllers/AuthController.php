<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function index()
    {
        return response()->json([
            'user' => Auth::user()
        ]);
    }
    public function userList(Request $request)
    {

        $query = $request->q;
        return response()->json([
            'data' => User::where('id', 'like', '%' . $query . '%')
                ->where('name', 'like', '%' . $query . '%')
                ->where('email', 'like', '%' . $query . '%')
                ->orderBy("created_at", "desc")
                ->get()
        ]);
    }
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'code' => 401,
                'message' => 'credentials do not match'
            ]);
        }
        $user = User::where('email', $request->email)->first();
        return response()->json([
            'user' => $user,
            'token' => $user->createToken('API token of' . $user->name)->plainTextToken
        ]);
    }

    public function register(Request $request)
    {
        $user = User::create([
            'name' =>  $request->name,
            'email' => $request->email,
            'image' => $request->image,
            'password' => Hash::make($request->password),
        ]);
        return response()->json([
            'user' => $user,
        ]);
    }

    public function logout()
    {
        Auth::user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'logouted'
        ]);
    }

    public function updateUser(Request $request, $id)
    {
        $user = User::find($id);
        $user->update([
            'name' =>  $request->name,
            'email' => $request->email,
            'image' => $request->image,
            'password' => Hash::make($request->password),
        ]);
        return response()->json([
            'user' => $user,
        ]);
    }
    public function destroy($id)
    {
        $seat = User::find($id);
        $seat->delete();
        return response()->json([
            'message' => "deleted",
        ]);
    }
}
