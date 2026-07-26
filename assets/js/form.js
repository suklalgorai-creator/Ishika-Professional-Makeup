/**
 * form.js — Appointment booking form sends to WhatsApp.
 */

import { $ } from './utils.js';

export const initForm = () => {
    $('.booking-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const bookingMessage = [
            'Hello, I want to book an appointment at Ishika Professional Salon & Spa.',
            `Name: ${data.get('name')}`,
            `Phone: ${data.get('phone')}`,
            `Service: ${data.get('service')}`,
            `Preferred date: ${data.get('date')}`,
            data.get('message') ? `Message: ${data.get('message')}` : ''
        ].filter(Boolean).join('\n');

        window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(bookingMessage)}`, '_blank', 'noopener');
        form.reset();
    });
};
