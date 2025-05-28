import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ email: "", msg: "", human: "" });
  const [status, setStatus] = useState("");

  const validateEmail = v =>
    /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(v.trim());

  const onSubmit = e => {
    e.preventDefault();
    if (!validateEmail(form.email) || !form.msg.trim()) {
      setStatus("Completa los campos correctamente.");
      return;
    }
    if (form.human !== "7") {
      setStatus("Respuesta anti-bot incorrecta.");
      return;
    }
    emailjs
      .send(
        "service_xxxxx", // ID de servicio
        "template_xxxxx", // ID de plantilla
        { email: form.email, message: form.msg },
        "publicKey_xxxxx" // public key
      )
      .then(() => setStatus("¡Mensaje enviado!"))
      .catch(() => setStatus("Error al enviar. Intenta más tarde."));
  };

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-semibold">Contáctame</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full rounded border px-3 py-2 focus:border-brand-red focus:outline-none"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Mensaje</label>
            <textarea
              required
              rows="5"
              className="w-full rounded border px-3 py-2 focus:border-brand-red focus:outline-none"
              value={form.msg}
              onChange={e => setForm({ ...form, msg: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">
              ¿Cuánto es 3 + 4? (anti-bot)
            </label>
            <input
              required
              className="w-full rounded border px-3 py-2 focus:border-brand-red focus:outline-none"
              value={form.human}
              onChange={e =>
                setForm({ ...form, human: e.target.value.trim() })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-brand-red py-2 font-medium text-white hover:bg-brand-red/80"
          >
            Enviar
          </button>
        </form>
        {status && <p className="mt-4 text-center text-sm">{status}</p>}
      </div>
    </section>
  );
}
