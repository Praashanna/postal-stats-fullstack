<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Serve React app for all routes except API routes
Route::get('/{path?}', function () {
    return view('index');
})->where('path', '^(?!api).*$')->name('spa');

// Fallback route to catch any remaining routes and serve React app
Route::fallback(function () {
    return view('index');
});
