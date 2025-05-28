/*  Generador de páginas de patrones.
    Inserta bloques desde data.js según el atributo data-type del contenedor.
-------------------------------------------------------------- */
import { patterns } from './data';
import Prism from 'prismjs';

const container = document.getElementById('patterns-container');
if (container) {
  const type = container.dataset.type;      // creational / structural / behavioral
  patterns
    .filter(p => p.category === type)
    .forEach((p, idx) => {
      container.insertAdjacentHTML('beforeend', patternBlock(p, idx));
    });

  Prism.highlightAll();
}

/* card / bloque → HTML ---------------------------------------------------- */
function patternBlock(p, idx) {
  const group = `lang-${idx}`; // para alternar java/js

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

      <pre class="rounded-md overflow-auto bg-[#f5f5f5] dark:bg-gray-900 p-4"
           data-lang-group="${group}">
        <code class="language-java">${p.example.java}</code>
      </pre>

      <pre class="rounded-md overflow-auto bg-[#f5f5f5] dark:bg-gray-900 p-4 hidden"
           data-lang-group="${group}">
        <code class="language-javascript">${p.example.js}</code>
      </pre>
    </div>
  </article>`;
}