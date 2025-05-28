@extends('layouts.app')

@section('title','Patrones Creacionales')
@section('content')
<section class="max-w-6xl mx-auto px-6 py-20">
    <header class="mb-10">
        <h1 class="text-3xl font-bold mb-3">Patrones creacionales</h1>
        <p class="text-gray-700 dark:text-gray-300">
            Los patrones creacionales proporcionan mecanismos de creación de objetos que aumentan la flexibilidad y la reutilización del código existente.
        </p>
    </header>

    {{-- Contenedor dinámico (JS) --}}
    <div id="patterns-container" data-type="creational" class="space-y-16"></div>
</section>
@endsection