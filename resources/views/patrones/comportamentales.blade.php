@extends('layouts.app')

@section('title','Patrones de Comportamiento')
@section('content')
<section class="max-w-6xl mx-auto px-6 py-20">
    <header class="mb-10">
        <h1 class="text-3xl font-bold mb-3">Patrones de comportamiento</h1>
        <p class="text-gray-700 dark:text-gray-300">
            Estos patrones se centran en la comunicación e interacción entre objetos,
            ayudando a distribuir la responsabilidad de manera óptima.
        </p>
    </header>

    {{-- Contenedor dinámico --}}
    <div id="patterns-container" data-type="behavioral" class="space-y-16"></div>
</section>
@endsection