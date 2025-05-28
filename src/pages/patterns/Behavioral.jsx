import { patterns } from "./data";
import PatternCodeExample from "../../components/PatternCard";

export default function Behavioral() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-10 text-3xl font-semibold">Patrones de comportamiento</h1>

      {patterns.behavioral.map(p => (
        <section key={p.name} className="mb-16">
          <h2 className="mb-2 text-2xl font-semibold">{p.name}</h2>
          <img
            src={p.img}
            alt={p.name}
            className="mb-4 w-full max-w-md rounded shadow"
            loading="lazy"
          />
          <p className="mb-4 leading-relaxed">{p.desc}</p>
          <PatternCodeExample code={p.code} />
        </section>
      ))}
    </article>
  );
}