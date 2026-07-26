/**
 * main.js — Application entry point.
 * Initialises all modules in the same order as the original monolithic script.
 */

import { $ } from './utils.js';
import { initTheme } from './theme.js';
import { initNavbar, updateChrome, setActiveLink } from './navbar.js';
import { initRipple, initImageFallbacks } from './interactions.js';
import { initReveal, initCounters } from './animations.js';
import { initTestimonials } from './testimonials.js';
import { initLightbox } from './lightbox.js';
import { initForm } from './form.js';

/* ── Lucide icons ── */
const initIcons = () => {
    window.lucide?.createIcons({
        attrs: {
            'stroke-width': 1.7,
            'aria-hidden': 'true'
        }
    });
};

/* ── Preloader (on window.load, not DOMContentLoaded) ── */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    $('.preloader')?.classList.add('hide');
});

/* ── Scroll chrome ── */
window.addEventListener('scroll', () => {
    updateChrome();
    setActiveLink();
}, { passive: true });

/* ── Initialise everything ── */
initNavbar();
initTheme();
initIcons();
initReveal();
initCounters();
initLightbox();
initTestimonials();
initRipple();
initImageFallbacks();
initForm();
updateChrome();
setActiveLink();
