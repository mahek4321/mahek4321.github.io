/* ============================
   MAHEK MALKAN — PORTFOLIO JS
   ============================ */

'use strict';

// ─── DATA ───────────────────────────────────────────────────────────────────

const SKILLS_DATA = [
  { name: 'HTML5',       icon: '🌐', cat: 'frontend' },
  { name: 'CSS3',        icon: '🎨', cat: 'frontend' },
  { name: 'JavaScript',  icon: '⚡', cat: 'frontend' },
  { name: 'React.js',    icon: '⚛️',  cat: 'frontend' },
  { name: 'Tailwind',    icon: '💨', cat: 'frontend' },
  { name: 'Bootstrap',   icon: '🅱️',  cat: 'frontend' },
  { name: 'Node.js',     icon: '🟢', cat: 'backend'  },
  { name: 'Express.js',  icon: '🚂', cat: 'backend'  },
  { name: 'Python',      icon: '🐍', cat: 'backend'  },
  { name: 'MongoDB',     icon: '🍃', cat: 'backend'  },
  { name: 'MySQL',       icon: '🗄️',  cat: 'backend'  },
  { name: 'REST API',    icon: '🔗', cat: 'backend'  },
  { name: 'Git & GitHub',icon: '🐙', cat: 'tools'    },
  { name: 'VS Code',     icon: '💻', cat: 'tools'    },
  { name: 'Figma',       icon: '🎭', cat: 'tools'    },
  { name: 'Postman',     icon: '📮', cat: 'tools'    },
  { name: 'Linux',       icon: '🐧', cat: 'tools'    },
  { name: 'Firebase',    icon: '🔥', cat: 'tools'    },
];

const PROJECTS_DATA = [
  {
    emoji: '🛒',
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    tags: ['React', 'Node.js', 'MongoDB'],
    title: 'ShopSphere — E-Commerce Platform',
    desc: 'A full-stack e-commerce web application with user authentication, product management, cart functionality, and payment gateway integration.',
    github: '#',
    live: '#',
  },
  {
    emoji: '🤖',
    bg: 'linear-gradient(135deg, #0f2027, #203a43)',
    tags: ['Python', 'NLP', 'Flask'],
    title: 'AI Chat Assistant',
    desc: 'A conversational AI assistant built with Python and NLP libraries. Handles intent recognition, context-aware responses, and multi-turn conversations.',
    github: '#',
    live: '#',
  },
  {
    emoji: '📊',
    bg: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
    tags: ['JavaScript', 'Chart.js', 'API'],
    title: 'Analytics Dashboard',
    desc: 'An interactive data visualization dashboard that fetches real-time data via APIs and renders dynamic charts, graphs, and KPI cards.',
    github: '#',
    live: '#',
  },
  {
    emoji: '🏥',
    bg: 'linear-gradient(135deg, #0d1117, #161b22)',
    tags: ['React', 'Firebase', 'CSS'],
    title: 'HealthTrack App',
    desc: 'A healthcare management web app enabling patients to book appointments, track vitals, and communicate with doctors securely.',
    github: '#',
    live: '#',
  },
  {
    emoji: '🎵',
    bg: 'linear-gradient(135deg, #1a0533, #2d0b5a)',
    tags: ['JavaScript', 'HTML5 Audio', 'CSS'],
    title: 'VibePlayer — Music App',
    desc: 'A sleek music streaming frontend with playlist management, visualizer animations, and keyboard shortcuts for enhanced UX.',
    github: '#',
    live: '#',
  },
  {
    emoji: '📝',
    bg: 'linear-gradient(135deg, #1c1c1c, #2a2a2a)',
    tags: ['React', 'Redux', 'LocalStorage'],
    title: 'TaskFlow — Todo Manager',
    desc: 'A productivity app with drag-and-drop task management, priority labels, deadlines, and offline-first functionality.',
    github: '#',
    live: '#',
  },
];

const EDUCATION_DATA = [
  {
    year: '2022 — Present',
    title: 'B.Tech in Computer Science & Engineering',
    inst: 'Symbiosis Institute of Technology, Nagpur',
    desc: 'Pursuing a comprehensive program covering Data Structures, Algorithms, Web Development, Machine Learning, DBMS, Operating Systems, and Computer Networks. Active member of the Tech & Coding Club.',
    badge: 'Current — 3rd Year',
  },
  {
    year: '2020 — 2022',
    title: 'Higher Secondary Certificate (HSC)',
    inst: 'Science Stream — Nagpur, Maharashtra',
    desc: 'Completed 12th with distinction in Physics, Chemistry, and Mathematics. Built first web project during this period and discovered a passion for coding.',
    badge: '88% — Merit',
  },
  {
    year: 'Until 2020',
    title: 'Secondary School Certificate (SSC)',
    inst: 'Central Board School, Nagpur',
    desc: 'Strong foundation in sciences and mathematics. Participated in inter-school science fairs and quiz competitions.',
    badge: '92% — Distinction',
  },
];

const ACHIEVEMENTS_DATA = [
  { icon: '🏆', title: 'Hackathon Winner',        desc: 'Won 1st place at SIT TechFest Hackathon 2023, solving a real-world healthcare problem with an AI-powered web solution.' },
  { icon: '🎖️', title: 'Top 10 Coder — ICPC',    desc: 'Ranked in the Top 10 at the regional ICPC qualifiers, demonstrating strong algorithmic problem-solving skills.' },
  { icon: '📜', title: 'Full Stack Certification', desc: 'Certified in Full Stack Web Development by Coursera / Meta. Completed 150+ hours of hands-on project work.' },
  { icon: '🌟', title: 'Open Source Contributor', desc: 'Contributed bug fixes and features to 3+ open source repositories on GitHub with 200+ stars combined.' },
  { icon: '🤝', title: 'Tech Club Lead',          desc: 'Served as Technical Head of SIT\'s Coding Club, organizing workshops, boot camps, and peer learning sessions.' },
  { icon: '📢', title: 'Speaker — TechTalk 2024', desc: 'Delivered a session on "Building Modern Web Apps with React & Node" to 120+ students at the college tech seminar.' },
];

// ─── LOADER ──────────────────────────────────────────────────────────────────

function initLoader() {
  const loader     = document.getElementById('loader');
  const fill       = document.getElementById('loaderFill');
  const percent    = document.getElementById('loaderPercent');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => loader.classList.add('hidden'), 500);
    }
    fill.style.width    = progress + '%';
    percent.textContent = Math.floor(progress) + '%';
  }, 100);
}

// ─── CURSOR ──────────────────────────────────────────────────────────────────

function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  let mouseX = 0, mouseY = 0;
  let followX = 0, followY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  function animateFollower() {
    followX += (mouseX - followX) * 0.12;
    followY += (mouseY - followY) * 0.12;
    follower.style.left = followX + 'px';
    follower.style.top  = followY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .skill-card, .project-card, .ach-card').forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('hovered'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hovered'));
  });
}

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

function initNav() {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
}

// ─── TYPED ROLE ──────────────────────────────────────────────────────────────

function initTyped() {
  const roles   = ['Frontend Developer', 'Full Stack Engineer', 'UI/UX Enthusiast', 'Problem Solver', 'Open Source Contributor'];
  const target  = document.getElementById('typedRole');
  let roleIdx   = 0;
  let charIdx   = 0;
  let deleting  = false;

  function tick() {
    const current = roles[roleIdx];
    if (!deleting) {
      target.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      target.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 60 : 110);
  }
  tick();
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────

function initReveal() {
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const io = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 80);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}

// ─── COUNTER ANIMATION ───────────────────────────────────────────────────────

function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        let count = 0;
        const step = Math.ceil(target / 30);
        const timer = setInterval(() => {
          count = Math.min(count + step, target);
          entry.target.textContent = count;
          if (count >= target) clearInterval(timer);
        }, 50);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

// ─── SKILLS GRID ─────────────────────────────────────────────────────────────

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS_DATA.map(s => `
    <div class="skill-card reveal-up" data-cat="${s.cat}">
      <span class="skill-icon">${s.icon}</span>
      <span class="skill-name">${s.name}</span>
    </div>
  `).join('');

  // Re-observe newly created reveal elements
  initReveal();
}

function initSkillFilter() {
  document.querySelectorAll('.skill-cat').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.skill-cat').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      document.querySelectorAll('.skill-card').forEach(card => {
        const match = cat === 'all' || card.getAttribute('data-cat') === cat;
        card.classList.toggle('hidden', !match);
      });
    });
  });
}

// ─── SKILL BARS ──────────────────────────────────────────────────────────────

function initSkillBars() {
  const bars = document.querySelectorAll('.bar-fill');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('data-width') + '%';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => io.observe(bar));
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS_DATA.map((p, i) => `
    <div class="project-card" style="transition-delay: ${i * 80}ms">
      <div class="project-thumb" style="background: ${p.bg}">
        <span style="position:relative;z-index:1">${p.emoji}</span>
      </div>
      <div class="project-body">
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-links">
          <a href="${p.github}" class="project-link">GitHub <span>↗</span></a>
          <a href="${p.live}"   class="project-link">Live Demo <span>↗</span></a>
        </div>
      </div>
    </div>
  `).join('');

  const cards = document.querySelectorAll('.project-card');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => io.observe(c));
}

// ─── EDUCATION ───────────────────────────────────────────────────────────────

function renderEducation() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = EDUCATION_DATA.map((e, i) => `
    <div class="timeline-item" style="transition-delay: ${i * 120}ms">
      <div class="timeline-year">${e.year}</div>
      <h3 class="timeline-title">${e.title}</h3>
      <p class="timeline-inst">${e.inst}</p>
      <p class="timeline-desc">${e.desc}</p>
      <span class="timeline-badge">${e.badge}</span>
    </div>
  `).join('');

  const items = document.querySelectorAll('.timeline-item');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  items.forEach(el => io.observe(el));
}

// ─── ACHIEVEMENTS ────────────────────────────────────────────────────────────

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  grid.innerHTML = ACHIEVEMENTS_DATA.map((a, i) => `
    <div class="ach-card" style="transition-delay: ${i * 80}ms">
      <div class="ach-icon">${a.icon}</div>
      <h3 class="ach-title">${a.title}</h3>
      <p class="ach-desc">${a.desc}</p>
    </div>
  `).join('');

  const cards = document.querySelectorAll('.ach-card');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(c => io.observe(c));
}

// ─── CONTACT FORM ────────────────────────────────────────────────────────────

function initContactForm() {
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  function validate() {
    let valid = true;

    const nameEl  = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const msgEl   = document.getElementById('message');

    document.getElementById('nameError').textContent  = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    nameEl.classList.remove('error');
    emailEl.classList.remove('error');
    msgEl.classList.remove('error');

    if (!nameEl.value.trim()) {
      document.getElementById('nameError').textContent = 'Name is required.';
      nameEl.classList.add('error');
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailEl.value)) {
      document.getElementById('emailError').textContent = 'Enter a valid email.';
      emailEl.classList.add('error');
      valid = false;
    }
    if (!msgEl.value.trim() || msgEl.value.trim().length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
      msgEl.classList.add('error');
      valid = false;
    }
    return valid;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Sending…';
    submitBtn.querySelector('.btn-icon').textContent = '⏳';

    // Simulate API call
    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'Send Message';
      submitBtn.querySelector('.btn-icon').textContent = '→';
      formSuccess.classList.add('show');
      setTimeout(() => formSuccess.classList.remove('show'), 5000);
    }, 1800);
  });
}

// ─── PARALLAX HERO ───────────────────────────────────────────────────────────

function initParallax() {
  const orb1 = document.querySelector('.hero-orb-1');
  const orb2 = document.querySelector('.hero-orb-2');
  window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    if (orb1) orb1.style.transform = `translate(${x}px, ${y}px)`;
    if (orb2) orb2.style.transform = `translate(${-x}px, ${-y}px)`;
  });
}

// ─── SMOOTH ACTIVE NAV HIGHLIGHT ─────────────────────────────────────────────

function highlightNav() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

// ─── FOOTER YEAR ─────────────────────────────────────────────────────────────

function setFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

// ─── CV DOWNLOAD ─────────────────────────────────────────────────────────────

function initCVDownload() {
  const btn = document.getElementById('downloadCV');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.preventDefault();
    // Placeholder: replace href with actual resume PDF path
    alert('📄 CV download coming soon! Replace this with your actual resume PDF link.');
  });
}

// ─── SCROLL TO TOP ───────────────────────────────────────────────────────────

function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', () => {
    btn.style.opacity = window.scrollY > 400 ? '1' : '0';
  });
}

// ─── SMOOTH NAV ANCHOR SCROLL ────────────────────────────────────────────────

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ─── TILT EFFECT ON PROJECT CARDS ────────────────────────────────────────────

function initTilt() {
  document.addEventListener('mousemove', e => {
    document.querySelectorAll('.project-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width  / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1.5) {
        card.style.transform = `perspective(600px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg) translateY(-6px)`;
      } else {
        card.style.transform = '';
      }
    });
  });
}

// ─── INIT ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNav();
  initTyped();
  initReveal();
  initCounters();

  renderSkills();
  initSkillFilter();
  initSkillBars();

  renderProjects();
  renderEducation();
  renderAchievements();

  initContactForm();
  initParallax();
  highlightNav();
  setFooterYear();
  initCVDownload();
  initBackTop();
  initSmoothScroll();
  initTilt();
});
