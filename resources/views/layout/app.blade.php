<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>DevPattern – @yield('title','Patrones de diseño')</title>
    @vite(['resources/css/app.css','resources/js/app.js','resources/js/patternPage.js'])
</head>
<body class="pt-20">

    {{-- === Header (fijo) === --}}
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
                    <a href="https://linkedin.com/in/tu-perfil" target="_blank" aria-label="LinkedIn" class="hover:underline">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 ..."/></svg>
                    </a>
                    <a href="https://github.com/tu-usuario" target="_blank" aria-label="GitHub"   class="hover:underline">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12.026 2c-5.498 ..."/></svg>
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

    {{-- Barra flotante accesibilidad --}}
    <div class="fixed bottom-6 right-6 z-50 space-y-2">
        <button onclick="a11y.zoomIn()"    class="a11y-btn" title="Aumentar fuente">A+</button>
        <button onclick="a11y.zoomOut()"   class="a11y-btn" title="Disminuir fuente">A-</button>
        <button onclick="a11y.toggleFont()"title="Cambiar fuente"   class="a11y-btn">F</button>
        <button onclick="a11y.toggleDark()"title="Modo oscuro"      class="a11y-btn">🌙</button>
        <button onclick="a11y.toggleContrast()" class="a11y-btn" title="Alto contraste">⧉</button>
        <button onclick="a11y.toggleCursor()"   class="a11y-btn" title="Cursor grande">◌</button>
        <button onclick="a11y.toggleImages()"   class="a11y-btn" title="Quitar imágenes">🖼️</button>
        <button onclick="a11y.toggleLinks()"    class="a11y-btn" title="Resaltar texto">🔗</button>
    </div>

</body>
</html>