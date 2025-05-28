import './bootstrap';       // opcional si usas axios & Echo
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import './accessibility.js';
import { patterns } from './data';

/* Dropdown de “Patrones” en el header (hover) */
const dropdownTrigger = document.getElementById('patterns-trigger');
const dropdownMenu    = document.getElementById('patterns-menu');
if (dropdownTrigger) {
  dropdownTrigger.addEventListener('mouseenter', () => dropdownMenu.classList.remove('hidden'));
  dropdownTrigger.addEventListener('mouseleave', () => dropdownMenu.classList.add('hidden'));
  dropdownMenu.addEventListener('mouseenter', () => dropdownMenu.classList.remove('hidden'));
  dropdownMenu.addEventListener('mouseleave', () => dropdownMenu.classList.add('hidden'));
}

/* Animaciones al scrollear (intersección) */
const faders = document.querySelectorAll('[data-fade]');
const io = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('opacity-100', 'translate-y-0')),
  { threshold: 0.2 }
);
faders.forEach(el => io.observe(el));

/*  Code-block language toggle -------------------------------- */
document.querySelectorAll('[data-toggle-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.dataset.toggleLang;
    document.querySelectorAll(`[data-lang-group="${group}"]`).forEach(block => {
      block.classList.toggle('hidden');
    });
  });
});