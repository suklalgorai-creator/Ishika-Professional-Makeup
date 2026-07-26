/**
 * form.js — Appointment booking form sends to WhatsApp.
 */

import { $ } from './utils.js';

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const d = new Date(dateStr);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};

export const initForm = () => {
    $('.booking-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);

        const name = data.get('name') || '';
        const phone = data.get('phone') || '';
        const service = data.get('service') || '';
        const date = formatDate(data.get('date'));
        const message = data.get('message') || '';

        const lines = [
            '✨ *ISHIKA PROFESSIONAL SALON & SPA* ✨',
            '━━━━━━━━━━━━━━━━━━━',
            '',
            '📋 *NEW BOOKING REQUEST*',
            '',
            `👤 *Name:* ${name}`,
            '',
            `📱 *Phone:* ${phone}`,
            '',
            `💄 *Service:* ${service}`,
            '',
            `📅 *Date:* ${date}`,
        ];

        if (message.trim()) {
            lines.push('', `💬 *Message:* ${message}`);
        }

        lines.push(
            '',
            '━━━━━━━━━━━━━━━━━━━',
            '🙏 Please confirm my appointment.',
            'Thank you! 🌸'
        );

        const bookingMessage = lines.join('\n');

        window.open(`https://wa.me/917463030584?text=${encodeURIComponent(bookingMessage)}`, '_blank', 'noopener');
        form.reset();
    });
};
