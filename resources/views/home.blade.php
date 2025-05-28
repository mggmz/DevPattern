@extends('layouts.app')

@section('title','Inicio')
@section('content')

{{-- Hero ODS-4 --}}
<section class="relative bg-[url('/assets/ods4-bg.svg')] bg-cover bg-center">
    <div class="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
    <div class="relative mx-auto max-w-5xl px-6 py-32 text-center text-white">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6">ODS 4 · Educación de Calidad</h1>
        <p class="max-w-3xl mx-auto text-lg md:text-xl">
            El compromiso con una educación inclusiva y equitativa impulsa la innovación en la ingeniería de software.
            <br>Los <strong>patrones de diseño</strong> ofrecen un lenguaje común que potencia esa misión.
        </p>
    </div>
</section>

{{-- Secciones en “islas” --}}
@php
    $blocks = [
        [
            'title' => '¿Por qué patrones de diseño?',
            'text'  => 'Los patrones encapsulan soluciones probadas que, al ser transmitidas en el aula, reducen la brecha entre el conocimiento teórico y la práctica profesional.',
            'img'   => 'island1.svg'
        ],
        [
            'title' => 'Pensamiento crítico',
            'text'  => 'Analizar cuándo y cómo aplicar cada patrón desarrolla la capacidad de evaluar trade-offs, una habilidad esencial para ingenieros de software.',
            'img'   => 'island2.svg'
        ],
        [
            'title' => 'Transferencia de conocimiento sostenible',
            'text'  => 'El uso de un catálogo compartido facilita la tutoría entre pares y la creación de comunidades de aprendizaje.',
            'img'   => 'island3.svg'
        ]
    ];
@endphp

@foreach ($blocks as $i => $b)
<section class="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto px-6 py-20">
    <div class="w-full md:w-1/2 {{ $i % 2 ? 'order-2 md:order-1' : '' }}"
         data-fade
         class="opacity-0 translate-y-4 transition-all duration-700">
        <h2 class="text-2xl font-bold mb-4">{{ $b['title'] }}</h2>
        <p class="text-lg text-gray-700 dark:text-gray-300">{{ $b['text'] }}</p>
    </div>

    <figure class="w-full md:w-1/2 {{ $i % 2 ? 'order-1 md:order-2' : '' }}"
            data-fade
            class="opacity-0 translate-y-4 transition-all duration-700">
        <img src="/assets/{{ $b['img'] }}"
             alt="{{ $b['title'] }}"
             class="w-full h-auto rounded-xl shadow-lg">
    </figure>
</section>
@endforeach

@endsection