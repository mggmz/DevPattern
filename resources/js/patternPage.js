/* Generador de páginas de patrones                                     *
 * Lee patterns de data.js y crea dinámicamente los bloques de contenido *
 * Autor: DevPattern                                                     */
import { patterns } from './data';
import Prism        from 'prismjs';

/* ==== Selección de contenedor ==== */
const container = document.getElementById('patterns-container');
if (container) {
  const rawType = container.dataset.type;          // valor marcado en la vista
  const typeMap = {
    creational  : ['creational', 'creacionales'],
    structural  : ['structural',  'estructurales'],
    behavioral  : ['behavioral',  'comportamiento', 'comportamentales']
  };

  const validKeys = Object.entries(typeMap)
    .find(([, aliases]) => aliases.includes(rawType))?.[1] || [rawType];

  patterns
    .filter(p => validKeys.includes(p.category))
    .forEach((pattern, idx) => container.insertAdjacentHTML('beforeend', renderBlock(pattern, idx)));

  Prism.highlightAll();
}

/* ==== Renderizado de cada patrón ==================================== */
function renderBlock(p, i) {
  const group = `g${i}`;   // mismo grupo → toggle lang
  return `
  <article class="flex flex-col xl:flex-row gap-10 items-start" data-fade>
    <figure class="w-full xl:w-1/3">
      <img src="/assets/${p.image}" alt="${p.name}" class="rounded-lg shadow-md" />
    </figure>

    <div class="w-full xl:w-2/3 space-y-4">
      <h2 class="text-2xl font-semibold">${p.name}</h2>
      <p class="text-gray-700 dark:text-gray-300">${p.description}</p>

      <div class="flex gap-3 text-sm">
        <button data-toggle-lang="${group}" class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300">Java</button>
        <button data-toggle-lang="${group}" class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300">JavaScript</button>
      </div>

      <pre class="rounded-md overflow-auto bg-[#f5f5f5] dark:bg-gray-900 p-4" data-lang-group="${group}">
        <code class="language-java">${p.example.java}</code>
      </pre>

      <pre class="rounded-md overflow-auto bg-[#f5f5f5] dark:bg-gray-900 p-4 hidden" data-lang-group="${group}">
        <code class="language-javascript">${p.example.js}</code>
      </pre>
    </div>
  </article>`;
}