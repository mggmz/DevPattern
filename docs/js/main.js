/* Menú hamburguesa ------------------------------------------------------- */
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
burger?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

/* Dropdown (en escritorio) ---------------------------------------------- */
// (mousedown evita que el enlace padre dispare navegación)
document.querySelectorAll("header .group > button").forEach(btn => {
  btn.addEventListener("mousedown", e => e.preventDefault());
});

/* Animación de aparición al scrollear ----------------------------------- */
const io = new IntersectionObserver(
  entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
  },
  { threshold: 0.25 }
);
document.querySelectorAll(".fade-in").forEach(el => io.observe(el));
