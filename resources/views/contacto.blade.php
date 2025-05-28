@extends('layouts.app')

@section('title','Contacto')
@section('content')
<section class="flex items-center justify-center min-h-[80vh] px-4 py-16">
    <div class="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
        <h1 class="text-2xl font-semibold text-center">Contáctame</h1>
        <form id="contact-form" class="space-y-4">
            @csrf
            <div>
                <label class="block mb-1 font-medium" for="email">Email</label>
                <input type="email" id="email" name="email" required
                       class="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-header">
            </div>
            <div>
                <label class="block mb-1 font-medium" for="message">Mensaje</label>
                <textarea id="message" name="message" rows="6" required
                          class="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-header"></textarea>
            </div>
            <button type="submit"
                    class="w-full py-2 px-4 rounded-md bg-brand-header text-white font-semibold hover:bg-red-600 transition">
                Enviar
            </button>
            <p id="form-status" class="text-center text-sm mt-2"></p>
        </form>
    </div>
</section>

{{-- EmailJS --}}
@push('scripts')
<script type="module">
import emailjs from 'emailjs-com';
emailjs.init('TU_PUBLIC_KEY'); // reemplaza con tu Public Key

const form   = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = 'Enviando…';

    emailjs.send('default_service', 'template_contacto', {
        from_email: form.email.value,
        message:   form.message.value
    }).then(() => {
        status.textContent = '¡Mensaje enviado correctamente!';
        form.reset();
    }).catch(err => {
        console.error(err);
        status.textContent = 'Ocurrió un error. Inténtalo más tarde.';
    });
});
</script>
@endpush
@endsection