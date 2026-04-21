/* ============================================================
   Job Nyaribari Portfolio — JavaScript
   ============================================================ */

// ── Navbar: scroll effect ────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile navigation ───────────────────────────────────────
const hamburger       = document.getElementById('hamburger');
const navLinks        = document.getElementById('nav-links');
const mobileOverlay   = document.getElementById('mobile-overlay');

function openMenu() {
  navLinks.classList.add('open');
  mobileOverlay.classList.add('visible');
  hamburger.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navLinks.classList.remove('open');
  mobileOverlay.classList.remove('visible');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

mobileOverlay.addEventListener('click', closeMenu);

// Close menu when any nav link is clicked
document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ── Roles Carousel ──────────────────────────────────────────
const roles = document.querySelectorAll('.role');
let currentRole = 0;

function cycleRoles() {
  roles[currentRole].classList.remove('active');
  currentRole = (currentRole + 1) % roles.length;
  roles[currentRole].classList.add('active');
}

if (roles.length) {
  setInterval(cycleRoles, 2800);
}

// ── Scroll-reveal animation ─────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.fade-in-section').forEach(el => {
  revealObserver.observe(el);
});

// ── Active nav-link highlight on scroll ─────────────────────
const sections      = document.querySelectorAll('section[id]');
const navLinkItems  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkItems.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach(s => sectionObserver.observe(s));

// ── Skill bar animation on reveal ───────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fillBar 1.2s ease-out forwards';
      }
    });
  },
  { threshold: 0.3 }
);

skillFills.forEach(fill => skillObserver.observe(fill));

// ── Smooth scroll for anchor links ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});