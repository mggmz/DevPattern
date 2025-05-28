@extends('layouts.app')

@section('title','Currículum')
@section('content')
<section class="max-w-4xl mx-auto px-6 py-20 space-y-8">
    <header>
        <h1 class="text-3xl font-bold mb-4">Mi experiencia como desarrollador</h1>
        <p class="text-gray-700 dark:text-gray-300">
            A continuación puedes explorar mi currículum completo sin salir del sitio. Usa la barra de
            herramientas del visor para acercar, buscar secciones clave o descargar una copia.
        </p>
    </header>

    {{-- Visor PDF --}}
    <div class="w-full h-[75vh] rounded-lg overflow-hidden shadow-lg">
        <iframe
            src="/assets/cv.pdf#toolbar=1&navpanes=0"
            class="w-full h-full border-0"
            allowfullscreen
        ></iframe>
    </div>
</section>
@endsection