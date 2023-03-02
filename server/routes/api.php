<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SeatController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/login", [AuthController::class, 'login']);
Route::post("/register", [AuthController::class, 'register']);
Route::post("/upload", [FileController::class, 'upload']);

Route::get("/category/client", [CategoryController::class, 'list']);
Route::get("/product/{category_id}", [ProductController::class, 'listByCategory']);
Route::post("/order/create", [OrderController::class, 'create']);
Route::get("/order/{phone_number}", [OrderController::class, 'orderByphoneNumber']);
Route::get("/total", [ReportController::class, 'total']);

Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::post("/logout", [AuthController::class, 'logout']);
    Route::get("/me", [AuthController::class, 'index']);
    Route::get("/user", [AuthController::class, 'userList']);
    Route::post("/user/edit/{id}", [AuthController::class, 'updateUser']);
    Route::delete("/user/delete/{id}", [AuthController::class, 'destroy']);

    Route::get("/category", [CategoryController::class, 'list']);
    Route::post("/category/create", [CategoryController::class, 'create']);
    Route::put("/category/edit/{id}", [CategoryController::class, 'edit']);
    Route::delete("/category/delete/{id}", [CategoryController::class, 'destroy']);

    Route::get("/product", [ProductController::class, 'list']);
    Route::post("/product/create", [ProductController::class, 'create']);
    Route::put("/product/edit/{id}", [ProductController::class, 'edit']);
    Route::delete("/product/delete/{id}", [ProductController::class, 'destroy']);

    Route::get("/seat", [SeatController::class, 'list']);
    Route::post("/seat/create", [SeatController::class, 'create']);
    Route::put("/seat/edit/{id}", [SeatController::class, 'edit']);
    Route::delete("/seat/delete", [SeatController::class, 'destroy']);
    Route::get("/order", [OrderController::class, 'list']);
    Route::put("/order/updateStatus/{id}", [OrderController::class, 'updateStatus']);

    Route::get("/report", [OrderController::class, 'list']);
});
