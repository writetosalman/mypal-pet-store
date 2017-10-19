<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// This route is path to Angular application created with angular-cli tool.
// It's no different from other Angular routes.
Route::get('/frontend/{path?}', function () {
    return view('ng-frontend');

})->where('path', '.*')
  ->name('ng-frontend');


// Redirect to angular frontend app
Route::get('/', function () {
    //return redirect()->route('ng-frontend');
    return view('homepage');
});
