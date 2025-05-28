<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>DevPattern – @yield('title','Patrones de diseño')</title>
    @vite(['resources/css/app.css','resources/js/app.js'])
</head>
<body class="pt-20"> {{-- padding-top para header fijo --}}

    {{-- === Header === --}}
    <header>
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            {{-- Logo / Home --}}
            <div class="flex items-center gap-2">
                <a href="{{ route('home') }}" class="flex items-center font-semibold text-lg">
                    <img src="/assets/logo.svg" alt="DevPattern logo" class="h-8 w-8 mr-2">
                    DevPattern
                </a>
            </div>

            {{-- Menú principal --}}
            <ul class="flex items-center gap-6">
                <li><a href="{{ route('home') }}" class="hover:underline">Home</a></li>

                {{-- Dropdown Patrones --}}
                <li class="relative" id="patterns-trigger">
                    <span class="cursor-pointer hover:underline">Patrones ▾</span>
                    <ul id="patterns-menu"
                        class="hidden absolute right-0 mt-2 w-56 rounded-md bg-white text-gray-700 shadow-lg dark:bg-gray-800 dark:text-gray-50">
                        <li><a href="{{ route('patrones.creacionales') }}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Creacionales</a></li>
                        <li><a href="{{ route('patrones.estructurales') }}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Estructurales</a></li>
                        <li><a href="{{ route('patrones.comportamentales') }}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Comportamiento</a></li>
                    </ul>
                </li>

                <li><a href="{{ route('cv') }}"        class="hover:underline">CV</a></li>
                <li><a href="{{ route('contacto') }}"  class="hover:underline">Contacto</a></li>
            </ul>
        </nav>
    </header>

    {{-- Contenido --}}
    <main class="min-h-screen">
        @yield('content')
    </main>

    {{-- === Footer === --}}
    <footer class="bg-gray-200 dark:bg-gray-900">
        <div class="mx-auto max-w-7xl flex flex-wrap justify-between items-start gap-6 px-6 py-8 text-sm">
            {{-- Izquierda --}}
            <div class="flex items-center gap-2">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.383 0 0 5.383 0 12c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12zm0 22.286C6.101 22.286 1.714 17.9 1.714 12S6.1 1.714 12 1.714 22.286 6.101 22.286 12 17.9 22.286 12 22.286z"/><path d="M6.857 6.857h3.428c1.316 0 2.381 1.065 2.381 2.381v9.524H9.238v-9.524H6.857V6.857zm10.286 0v9.524h-3.428V6.857h3.428z"/></svg>
                <span>© 2025 DevPatterns</span>
            </div>

            {{-- Centro --}}
            <div class="text-center">
                <h3 class="font-medium">Encuéntrame en línea</h3>
                <div class="mt-2 flex justify-center gap-4">
                    <a href="https://linkedin.com/in/tu-perfil" target="_blank" aria-label="LinkedIn">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.291c-.966 0-1.5-.723-1.5-1.615 0-.909.548-1.615 1.53-1.615.982 0 1.5.706 1.5 1.615 0 .892-.518 1.615-1.53 1.615zm13.5 11.291h-3v-5.569c0-1.328-.475-2.236-1.664-2.236-.908 0-1.448.608-1.687 1.197-.087.213-.109.512-.109.813v5.795h-3s.04-9.403 0-10.382h3v1.471c.397-.613 1.104-1.489 2.687-1.489 1.963 0 3.438 1.284 3.438 4.045v6.355z"/></svg>
                    </a>
                    <a href="https://github.com/tu-usuario" target="_blank" aria-label="GitHub">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12.026 2c-5.498 0-9.974 4.477-9.974 9.974 0 4.403 2.867 8.133 6.839 9.462.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.371-1.34-3.371-1.34-.454-1.155-1.109-1.463-1.109-1.463-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.349-1.088.636-1.34-2.221-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.029-2.682-.103-.253-.446-1.272.098-2.651 0 0 .84-.269 2.75 1.025a9.587 9.587 0 012.501-.336 9.6 9.6 0 012.501.336c1.909-1.294 2.748-1.025 2.748-1.025.546 1.379.203 2.398.1 2.651.64.699 1.028 1.591 1.028 2.682 0 3.842-2.337 4.688-4.566 4.937.358.309.678.919.678 1.855 0 1.338-.012 2.42-.012 2.75 0 .267.18.579.688.481 3.971-1.329 6.834-5.059 6.834-9.461 0-5.497-4.476-9.974-9.974-9.974z"/></svg>
                    </a>
                </div>
            </div>

            {{-- Derecha --}}
            <div class="text-right space-y-1">
                <a href="{{ route('home') }}" class="block hover:underline">Home</a>
                <a href="{{ route('patrones.creacionales') }}" class="block hover:underline">Patrones</a>
                <a href="{{ route('contacto') }}" class="block hover:underline">Contacto</a>
            </div>
        </div>
    </footer>

</body>
</html>