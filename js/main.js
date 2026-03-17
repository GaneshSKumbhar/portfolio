/* ════════════════════════════════════════════════════════
   Ganesh Kumbhar Portfolio — main.js
   ════════════════════════════════════════════════════════ */

// ── EmailJS Config ───────────────────────────────────────
// STEP 1: Go to https://www.emailjs.com/ and sign up (free)
// STEP 2: Create a Service (Gmail), get your Service ID
// STEP 3: Create an Email Template, get your Template ID
// STEP 4: Get your Public Key from Account > API Keys
// STEP 5: Replace the values below

const EMAILJS_CONFIG = {
  publicKey:  'qPr-jzIwW1BHiFvsS',
  serviceId:  'service_ay6ehon',
  templateId: 'template_qscfm17',
};

// ── EmailJS Init ─────────────────────────────────────────
(function () {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }
})();

// ── DOM Ready ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initMobileMenu();
  initParticles();
  initScrollReveal();
  initSkillBars();
  initCertFilter();
  initContactForm();
  initActiveNav();
  initTypingEffect();
});

// ── Custom Cursor ─────────────────────────────────────────
function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  // Smooth follower
  (function loop() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(loop);
  })();

  // Hover effect on interactive elements
  document.querySelectorAll('a, button, .project-card, .cert-card, .skill-card, .stat').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '16px';
      cursor.style.height = '16px';
      follower.style.width  = '50px';
      follower.style.height = '50px';
      follower.style.borderColor = 'rgba(0,245,255,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '8px';
      cursor.style.height = '8px';
      follower.style.width  = '30px';
      follower.style.height = '30px';
      follower.style.borderColor = 'rgba(0,245,255,0.5)';
    });
  });
}

// ── Navbar ────────────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }, { passive: true });
}

// ── Mobile Menu ───────────────────────────────────────────
function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));
}

// ── Particles ─────────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = 40;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --dur: ${4 + Math.random() * 6}s;
      --delay: ${Math.random() * 8}s;
      width: ${1 + Math.random() * 2}px;
      height: ${1 + Math.random() * 2}px;
    `;
    container.appendChild(p);
  }
}

// ── Scroll Reveal ─────────────────────────────────────────
function initScrollReveal() {
  // Add reveal class to elements we want to animate
  const targets = [
    '.about-grid',
    '.skill-card',
    '.project-card',
    '.cert-card',
    '.contact-grid',
    '.blog-coming-soon',
    '.section-title',
    '.section-sub',
  ];

  targets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${i * 0.08}s`;
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Skill Bars ────────────────────────────────────────────
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const width = el.getAttribute('data-w');
        setTimeout(() => { el.style.width = width + '%'; }, 200);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  fills.forEach(el => observer.observe(el));
}

// ── Certificate Filter ────────────────────────────────────
function initCertFilter() {
  const tabs  = document.querySelectorAll('.cert-tab');
  const cards = document.querySelectorAll('.cert-card[data-category]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
          card.style.animation = 'none';
          setTimeout(() => {
            card.style.animation = '';
            card.offsetHeight; // reflow
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ── Active Nav Highlight ──────────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// ── Typing Effect in Hero Title ───────────────────────────
function initTypingEffect() {
  const el = document.querySelector('.hero-title');
  if (!el) return;

  const roles = [
    'Full Stack Web Developer',
    'Frontend Engineer',
    'UI/UX Enthusiast',
    'Python Developer',
  ];

  let roleIndex = 0, charIndex = 0, deleting = false;

  function type() {
    const current = roles[roleIndex];
    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 40 : 80);
  }

  // Start after hero animation finishes
  setTimeout(type, 1800);
}

// ── Contact Form (EmailJS) ────────────────────────────────
function initContactForm() {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const status    = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      showStatus('error', '⚠️ Please fill in all fields.');
      return;
    }
    if (!isValidEmail(email)) {
      showStatus('error', '⚠️ Please enter a valid email address.');
      return;
    }

    // UI: loading state
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').classList.add('hidden');
    submitBtn.querySelector('.btn-loading').classList.remove('hidden');
    clearStatus();

    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
      // Demo mode — just simulate success so you can test the UI
      await fakeDelay(1200);
      showStatus('success', '✅ Message sent! (Note: Configure EmailJS keys in js/main.js to send real emails.)');
      form.reset();
      resetBtn();
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name:    name,
          from_email:   email,
          subject:      subject,
          message:      message,
          to_name:      'Ganesh',
          reply_to:     email,
        }
      );
      showStatus('success', '🚀 Message sent! I\'ll get back to you soon.');
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      showStatus('error', '❌ Oops! Something went wrong. Try emailing me directly at ganeshkumbhar638@gmail.com');
    } finally {
      resetBtn();
    }
  });

  function showStatus(type, msg) {
    status.textContent = msg;
    status.className = 'form-status ' + type;
  }
  function clearStatus() {
    status.textContent = '';
    status.className = 'form-status';
  }
  function resetBtn() {
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-text').classList.remove('hidden');
    submitBtn.querySelector('.btn-loading').classList.add('hidden');
  }
}

// ── Helpers ───────────────────────────────────────────────
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function fakeDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}