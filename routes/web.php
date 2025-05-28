<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/',               [PageController::class, 'home'])->name('home');
Route::get('/cv',             [PageController::class, 'cv'])->name('cv');
Route::get('/contacto',       [PageController::class, 'contacto'])->name('contacto');

Route::prefix('patrones')->group(function () {
    Route::get('/creacionales',      [PageController::class, 'creacionales'])->name('patrones.creacionales');
    Route::get('/estructurales',     [PageController::class, 'estructurales'])->name('patrones.estructurales');
    Route::get('/comportamentales',  [PageController::class, 'comportamentales'])->name('patrones.comportamentales');
});