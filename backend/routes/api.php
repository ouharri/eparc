<?php

use App\Http\Controllers\DriverController;
use App\Http\Controllers\InsuranceController;
use App\Http\Controllers\PassportController;
use App\Http\Controllers\VehicleController;
use Illuminate\Support\Facades\Route;


Route::post('register', [PassportController::class, 'register']);
Route::post('login', [PassportController::class, 'login']);
Route::post('check-auth', [PassportController::class, 'verifyToken']);


Route::resource('vehicle', VehicleController::class);
Route::resource('driver', DriverController::class);
Route::resource('insurance', InsuranceController::class);

Route::middleware(['auth:api'])->group(function () {

    Route::get('userInfo', [PassportController::class, 'userInfo']);

});



