import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "ODS 4 – Educación de calidad",
    text: "El Objetivo de Desarrollo Sostenible 4 persigue garantizar una educación inclusiva, equitativa y de calidad. Los patrones de diseño contribuyen a este fin al crear software robusto y sostenible que facilita la producción y difusión de contenidos académicos.",
    img: "/assets/ods4.png"
  },
  {
    title: "Patrones y formación de ingenieros",
    text: "Comprender los patrones de diseño fortalece la capacidad de los futuros ingenieros de software para resolver problemas complejos de manera estructurada. ‘DevPattern’ es una plataforma que explica cada patrón con ejemplos interactivos y código en dos lenguajes.",
    img: "/assets/students.jpg"
  },
  {
    title: "Inspiración académica abierta",
    text: "Siguiendo la filosofía de sitios como refactoring.guru, nuestra web ofrece material libre bajo licencia Creative Commons para apoyar cursos universitarios, bootcamps y estudios autodidactas.",
    img: "/assets/open-education.jpg"
  }
];

export default function Home() {
  // Observador para animaciones de fade-in
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0");
        }),
      { threshold: 0.2 }
    );
    refs.current.forEach(r => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <article className="mx-auto max-w-5xl space-y-24 px-4 py-16">
      {sections.map((s, i) => (
        <section
          key={i}
          ref={el => (refs.current[i] = el)}
          className={`grid gap-8 md:grid-cols-2 items-center opacity-0 translate-y-8 transition-all duration-[700ms] ${
            i % 2 ? "md:flex-row-reverse" : ""
          }`}
        >
          <img
            src={s.img}
            alt={s.title}
            className="w-full rounded shadow-md"
            loading="lazy"
          />
          <div>
            <h2 className="mb-4 text-2xl font-semibold">{s.title}</h2>
            <p className="leading-relaxed">{s.text}</p>
          </div>
        </section>
      ))}

      <div className="text-center">
        <Link
          to="/patrones/creacionales"
          className="inline-block rounded bg-brand-red px-6 py-3 font-medium text-white shadow hover:bg-brand-red/80"
        >
          Explorar patrones →
        </Link>
      </div>
    </article>
  );
}
