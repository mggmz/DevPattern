import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.EMAILJS_SERVICE,
      process.env.EMAILJS_TEMPLATE,
      formRef.current,
      process.env.EMAILJS_KEY
    ).then(() => setSent(true));
  };

  return (
    <div className="container mx-auto py-20 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Contáctame</h1>
      {sent ? (
        <p className="text-green-600">¡Mensaje enviado correctamente!</p>
      ) : (
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4 border p-6 rounded shadow">
          <label>
            Tu email:
            <input type="email" name="user_email" required className="w-full mt-1 p-2 border rounded"/>
          </label>
          <label>
            Tu mensaje:
            <textarea name="message" required className="w-full mt-1 p-2 border rounded h-40"/>
          </label>
          <button type="submit" className="bg-red-300 px-4 py-2 rounded">Enviar</button>
        </form>
      )}
    </div>
  );
}