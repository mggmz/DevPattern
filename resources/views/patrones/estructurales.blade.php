@extends('layouts.app')

@section('title','Patrones Estructurales')
@section('content')
<section class="max-w-6xl mx-auto px-6 py-20">
    <header class="mb-10">
        <h1 class="text-3xl font-bold mb-3">Patrones estructurales</h1>
        <p class="text-gray-700 dark:text-gray-300">
            Los patrones estructurales describen formas práticas de componer clases y objetos para formar
            estructuras más complejas sin perder flexibilidad ni mantenibilidad.
        </p>
    </header>

    {{-- Contenedor que se llenará dinámicamente --}}
    <div id="patterns-container" data-type="structural" class="space-y-16"></div>
</section>
@endsection