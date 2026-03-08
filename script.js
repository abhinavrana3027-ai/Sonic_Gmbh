/* ═══ SONIC LOGISTICS — FUTURISTIC V3 JS ═══ */

document.addEventListener('DOMContentLoaded', () => {

  // ═══ i18n TRANSLATIONS ═══
  const translations = {
    de: {
      nav_services: 'Services', nav_tech: 'Technologie', nav_fleet: 'Unsere Flotte',
      nav_platform: 'Plattform', nav_about: 'Unternehmen', nav_contact: 'Kontakt',
      nav_cta: 'Angebot Anfordern',
      hero_line1: 'DIE ZUKUNFT DER', hero_line2: 'KEP-LOGISTIK:', hero_line3: 'SCHNELLER.',
      hero_line4: 'GRÜNER.', hero_sub: 'Der Enterprise-Partner für effiziente, skalierbare, CO₂-neutrale Logistiklösungen in der urbanen Welt.',
      hero_cta1: 'Kostenloses Angebot Anfordern', hero_cta2: 'Flotte Entdecken →',
      chip1: '100% Elektrisch', chip2: 'Zuverlässig', chip3: 'Nachhaltig',
      hud1_title: 'Tägliche CO₂-Einsparung', hud1_unit: 'Tonnen',
      hud2_title: 'Netzwerk-Pünktlichkeit', hud3_title: 'Zustellungen pro Tag',
      tick1: '15+ Mercedes eVans im Einsatz', tick2: '50+ Postleitzahlen in Berlin',
      tick3: '500+ Zustellungen täglich', tick4: '0g CO₂-Emissionen',
      tick5: '99.2% Pünktlichkeitsrate', tick6: 'DPD & DHL Partner',
      svc_tag: 'UNSERE DIENSTLEISTUNGEN', svc_title: 'Logistik-<span class="text-glow">Lösungen</span>',
      svc_sub: 'Maßgeschneiderte Zustelllösungen für Unternehmen und Privatkunden in ganz Berlin.',
      svc1_title: 'Kurier & Paketzustellung',
      svc1_desc: 'Express- und Standardzustellung für Pakete aller Größen. Same-Day-Delivery in Berlin — zuverlässig und emissionsfrei.',
      svc2_title: 'Last-Mile für Unternehmen',
      svc2_desc: 'Dedizierte e-Flotte für Ihre Logistik. Als Partner von DPD & DHL liefern wir in über 50 Postleitzahlgebieten Berlins.',
      svc3_title: 'Fahrzeugtransfer & Sondertransporte',
      svc3_desc: 'Professioneller Fahrzeugtransport und Sonderzustellungen. Lebensmittellieferung, Möbeltransport und mehr.',
      svc3_m1v: 'Ganz DE', svc3_m1l: 'Reichweite',
      tech_tag: 'WARUM SONIC', tech_title: 'Der <span class="text-glow">Sonic</span> Vorteil',
      tech_img_label: 'Integriertes Urbanes Logistik-Ökosystem',
      stat1_title: 'CO₂-Reduktion', stat1_sub: 'vs. konventionelle Flotte',
      stat2_title: 'Pünktlichkeit', stat2_sub: 'Zuverlässige Zustellung',
      stat3_title: 'Elektrisch', stat3_sub: 'Gesamte Flotte emissionsfrei',
      feat1_title: 'Echtzeit-Tracking', feat1_desc: 'Live-Verfolgung jeder Sendung mit präzisen ETAs und Benachrichtigungen.',
      feat2_title: 'Intelligente Routen', feat2_desc: 'Optimierte Routenplanung für schnellere und effizientere Zustellung.',
      feat3_title: 'Berliner Expertise', feat3_desc: 'Wir kennen jede Straße, jede Abkürzung, jede Postleitzahl in Berlin.',
      fleet_tag: 'UNSERE FLOTTE', fleet_title: 'Mercedes <span class="text-glow">e-Sprinter</span> Flotte',
      fleet_sub: 'Modernste Elektro-Transporter für zuverlässige, emissionsfreie Zustellung.',
      fstat1: 'km Reichweite', fstat2: 'm³ Laderaum', fstat4: '% Verfügbarkeit',
      plat_tag: 'PLATTFORM', plat_title: 'Für <span class="text-glow">Unternehmen</span> & Privatkunden',
      plat1_title: 'Letzte Meile Berlin', plat1_desc: '50+ Postleitzahlen abgedeckt. Schnelle, zuverlässige Zustellung in ganz Berlin.',
      plat2_title: 'Nachhaltige Logistik', plat2_desc: 'Jede Zustellung ist klimaneutral. Null Emissionen, maximale Effizienz.',
      plat3_title: 'Express & Sondertransporte', plat3_desc: 'Same-Day, Möbel, Lebensmittel, Fahrzeugtransfer — alles aus einer Hand.',
      certs_label: 'Vertrauenswürdige Partnerschaften & Zertifizierungen',
      about_tag: 'UNTERNEHMEN', about_title: 'Über <span class="text-glow">Sonic Logistics</span>',
      about_p1: 'Gegründet von <strong>Suay Erol Selalmaz</strong> in Berlin-Charlottenburg, steht Sonic Logistics für die nächste Generation urbaner Logistik.',
      about_p2: 'Als offizieller Zustellpartner von <strong>DPD</strong> und <strong>DHL</strong> betreiben wir eine rein elektrische Mercedes-Flotte und liefern in über 50 Postleitzahlgebieten Berlins — schnell, zuverlässig und emissionsfrei.',
      tl1_year: 'Gründung', tl1_text: 'Start in Berlin-Charlottenburg mit Vision für grüne Logistik',
      tl2_year: 'Partnerschaft', tl2_text: 'Offizielle Last-Mile Partnerschaft mit DPD & DHL',
      tl3_year: 'Heute', tl3_text: '15+ Mercedes eVans, 50+ PLZ, 500+ Zustellungen/Tag',
      mega1: 'Zustellungen / Tag', mega2: 'PLZ-Gebiete Berlin', mega3: 'CO₂ pro Zustellung', mega4: 'Pünktlichkeit',
      career_tag: 'KARRIERE', career_title: 'Werde Teil der <span class="text-glow">Zukunft</span>',
      career_sub: 'Wir suchen zuverlässige Fahrer:innen für unser wachsendes Team in Berlin.',
      job1_type: 'Vollzeit', job1_title: 'Zusteller:in (m/w/d)',
      job1_desc: 'Festanstellung, 40h/Woche. Faires Gehalt, Mercedes eVan, alle Benefits.',
      job2_type: 'Teilzeit', job2_title: 'Zusteller:in (m/w/d)',
      job2_desc: 'Flexible Arbeitszeiten, 20h/Woche. Perfekt für Studierende.',
      job3_title: 'Zusteller:in (m/w/d)',
      job3_desc: 'Bis zu €520/Monat, flexible Einsätze. Idealer Einstieg.',
      job_apply: 'Jetzt Bewerben →',
      contact_tag: 'KONTAKT', contact_title: 'Lassen Sie uns <span class="text-glow">sprechen</span>',
      contact_sub: 'Ob B2B-Partnerschaft, persönliche Lieferung oder Karriere — wir sind für Sie da.',
      ci1_title: 'Standort', ci3_title: 'Telefon', ci4_title: 'Öffnungszeiten', ci4_val: 'Mo — Fr: 07:00 – 19:00',
      form_title: 'Nachricht Senden', form_subject_label: 'Betreff', form_select: 'Thema wählen…',
      form_opt1: 'B2B Partnerschaft', form_opt2: 'Lieferung buchen', form_opt3: 'Angebot anfordern',
      form_opt4: 'Bewerbung', form_opt5: 'Sonstiges',
      form_msg_label: 'Nachricht', form_msg_ph: 'Wie können wir Ihnen helfen?', form_submit: 'Nachricht Senden →',
      footer_desc: 'Die Zukunft der nachhaltigen Last-Mile-Logistik in Berlin.',
      f_svc1: 'Kurier & Pakete', f_svc2: 'Last-Mile B2B', f_svc3: 'Express Kurier', f_svc4: 'Fahrzeugtransfer',
      f_legal: 'Rechtliches', f_privacy: 'Datenschutz', footer_rights: 'Alle Rechte vorbehalten.',
      typed_words: ['SONIC.', 'ELEKTRISCH.', 'NACHHALTIG.', 'SONIC.']
    },
    en: {
      nav_services: 'Services', nav_tech: 'Technology', nav_fleet: 'Our Fleet',
      nav_platform: 'Platform', nav_about: 'Company', nav_contact: 'Contact',
      nav_cta: 'Get a Quote',
      hero_line1: 'THE FUTURE OF', hero_line2: 'LAST-MILE LOGISTICS:', hero_line3: 'FASTER.',
      hero_line4: 'GREENER.', hero_sub: 'Your enterprise partner for efficient, scalable, carbon-neutral logistics solutions in the urban world.',
      hero_cta1: 'Get a Free Quote', hero_cta2: 'Discover Our Fleet →',
      chip1: '100% Electric', chip2: 'Reliable', chip3: 'Sustainable',
      hud1_title: 'Daily CO₂ Savings', hud1_unit: 'Tons',
      hud2_title: 'Network Punctuality', hud3_title: 'Deliveries per Day',
      tick1: '15+ Mercedes eVans in Operation', tick2: '50+ Postal Codes in Berlin',
      tick3: '500+ Deliveries Daily', tick4: '0g CO₂ Emissions',
      tick5: '99.2% Punctuality Rate', tick6: 'DPD & DHL Partner',
      svc_tag: 'OUR SERVICES', svc_title: 'Logistics <span class="text-glow">Solutions</span>',
      svc_sub: 'Tailored delivery solutions for businesses and private customers across Berlin.',
      svc1_title: 'Courier & Parcel Delivery',
      svc1_desc: 'Express and standard delivery for parcels of all sizes. Same-day delivery in Berlin — reliable and emission-free.',
      svc2_title: 'Last-Mile for Enterprises',
      svc2_desc: 'Dedicated e-fleet for your logistics. As partners of DPD & DHL, we deliver across 50+ postal code areas in Berlin.',
      svc3_title: 'Vehicle Transfer & Special Transport',
      svc3_desc: 'Professional vehicle transport and special deliveries. Food delivery, furniture transport and more.',
      svc3_m1v: 'All DE', svc3_m1l: 'Coverage',
      tech_tag: 'WHY SONIC', tech_title: 'The <span class="text-glow">Sonic</span> Advantage',
      tech_img_label: 'Integrated Urban Logistics Ecosystem',
      stat1_title: 'CO₂ Reduction', stat1_sub: 'vs. conventional fleet',
      stat2_title: 'Punctuality', stat2_sub: 'Reliable delivery',
      stat3_title: 'Electric', stat3_sub: 'Entire fleet emission-free',
      feat1_title: 'Real-Time Tracking', feat1_desc: 'Live tracking of every shipment with precise ETAs and notifications.',
      feat2_title: 'Smart Routing', feat2_desc: 'Optimized route planning for faster and more efficient delivery.',
      feat3_title: 'Berlin Expertise', feat3_desc: 'We know every street, every shortcut, every postal code in Berlin.',
      fleet_tag: 'OUR FLEET', fleet_title: 'Mercedes <span class="text-glow">e-Sprinter</span> Fleet',
      fleet_sub: 'State-of-the-art electric vans for reliable, emission-free delivery.',
      fstat1: 'km Range', fstat2: 'm³ Cargo Space', fstat4: '% Availability',
      plat_tag: 'PLATFORM', plat_title: 'For <span class="text-glow">Businesses</span> & Private Customers',
      plat1_title: 'Last Mile Berlin', plat1_desc: '50+ postal codes covered. Fast, reliable delivery across all of Berlin.',
      plat2_title: 'Sustainable Logistics', plat2_desc: 'Every delivery is carbon-neutral. Zero emissions, maximum efficiency.',
      plat3_title: 'Express & Special Transport', plat3_desc: 'Same-day, furniture, food, vehicle transfer — everything from one source.',
      certs_label: 'Trusted Partnerships & Certifications',
      about_tag: 'COMPANY', about_title: 'About <span class="text-glow">Sonic Logistics</span>',
      about_p1: 'Founded by <strong>Suay Erol Selalmaz</strong> in Berlin-Charlottenburg, Sonic Logistics represents the next generation of urban logistics.',
      about_p2: 'As an official delivery partner of <strong>DPD</strong> and <strong>DHL</strong>, we operate a fully electric Mercedes fleet and deliver across 50+ postal code areas in Berlin — fast, reliable, and emission-free.',
      tl1_year: 'Founded', tl1_text: 'Started in Berlin-Charlottenburg with a vision for green logistics',
      tl2_year: 'Partnership', tl2_text: 'Official last-mile partnership with DPD & DHL',
      tl3_year: 'Today', tl3_text: '15+ Mercedes eVans, 50+ postal codes, 500+ deliveries/day',
      mega1: 'Deliveries / Day', mega2: 'Postal Code Areas', mega3: 'CO₂ per Delivery', mega4: 'Punctuality',
      career_tag: 'CAREERS', career_title: 'Join the <span class="text-glow">Future</span>',
      career_sub: 'We are looking for reliable drivers to join our growing team in Berlin.',
      job1_type: 'Full-Time', job1_title: 'Delivery Driver (m/f/d)',
      job1_desc: 'Permanent position, 40h/week. Fair salary, Mercedes eVan, full benefits.',
      job2_type: 'Part-Time', job2_title: 'Delivery Driver (m/f/d)',
      job2_desc: 'Flexible working hours, 20h/week. Perfect for students.',
      job3_title: 'Delivery Driver (m/f/d)',
      job3_desc: 'Up to €520/month, flexible shifts. Ideal entry point.',
      job_apply: 'Apply Now →',
      contact_tag: 'CONTACT', contact_title: 'Let\'s <span class="text-glow">Talk</span>',
      contact_sub: 'Whether B2B partnership, personal delivery or career — we\'re here for you.',
      ci1_title: 'Location', ci3_title: 'Phone', ci4_title: 'Business Hours', ci4_val: 'Mon — Fri: 07:00 – 19:00',
      form_title: 'Send Message', form_subject_label: 'Subject', form_select: 'Choose topic…',
      form_opt1: 'B2B Partnership', form_opt2: 'Book Delivery', form_opt3: 'Request Quote',
      form_opt4: 'Job Application', form_opt5: 'Other',
      form_msg_label: 'Message', form_msg_ph: 'How can we help you?', form_submit: 'Send Message →',
      footer_desc: 'The future of sustainable last-mile logistics in Berlin.',
      f_svc1: 'Courier & Parcels', f_svc2: 'Last-Mile B2B', f_svc3: 'Express Courier', f_svc4: 'Vehicle Transfer',
      f_legal: 'Legal', f_privacy: 'Privacy Policy', footer_rights: 'All rights reserved.',
      typed_words: ['SONIC.', 'ELECTRIC.', 'SUSTAINABLE.', 'SONIC.']
    }
  };

  let currentLang = 'de';

  function switchLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) {
        if (el.tagName === 'OPTION') {
          el.textContent = t[key];
        } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });
    // Update placeholder attrs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key]) el.placeholder = t[key];
    });
    // Update glitch text data-text
    const glitch = document.querySelector('.glitch-text');
    if (glitch && t.hero_line1) glitch.setAttribute('data-text', t.hero_line1);
    // Update lang attr
    document.documentElement.lang = lang;
    // Update toggle active state
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
    // Restart typed text
    resetTypedText(t.typed_words);
  }

  // Language toggle click
  document.getElementById('langToggle').addEventListener('click', () => {
    switchLanguage(currentLang === 'de' ? 'en' : 'de');
  });

  // ═══ PARTICLE SYSTEM ═══
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 90;
  let mouseX = -1000, mouseY = -1000;

  function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 1.5 + 0.5;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.color = Math.random() > 0.8 ? '0, 229, 255' : '0, 230, 118';
    }
    update() {
      // Mouse repulsion
      const dx = this.x - mouseX, dy = this.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120 * 0.5;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }
      this.vx *= 0.99; this.vy *= 0.99;
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 230, 118, ${0.07 * (1 - dist / 160)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // ═══ NAVBAR ═══
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ═══ HAMBURGER ═══
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ═══ ACTIVE NAV ═══
  const sections = document.querySelectorAll('section[id]');
  const navItems = navLinks.querySelectorAll('a');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 150;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      if (scrollY >= top && scrollY < top + sec.offsetHeight) {
        navItems.forEach(a => a.classList.remove('active'));
        const active = navLinks.querySelector(`a[href="#${sec.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { passive: true });

  // ═══ SCROLL REVEAL ═══
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = entry.target.parentElement.querySelectorAll('.animate-in');
        let delay = 0;
        siblings.forEach((sib, idx) => { if (sib === entry.target) delay = idx * 120; });
        setTimeout(() => entry.target.classList.add('visible'), Math.min(delay, 500));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));

  // ═══ COUNTER — NUMBER SCRAMBLE ═══
  const counterEls = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const decimals = parseInt(el.dataset.decimals) || 0;
        const duration = 2200;
        const scrambleDuration = 600;
        const start = performance.now();
        const chars = '0123456789';

        function tick(now) {
          const elapsed = now - start;
          if (elapsed < scrambleDuration) {
            // Scramble phase
            let s = '';
            const len = target.toFixed(decimals).length;
            for (let i = 0; i < len; i++) {
              const c = target.toFixed(decimals)[i];
              s += c === '.' ? '.' : chars[Math.floor(Math.random() * 10)];
            }
            el.textContent = s;
            requestAnimationFrame(tick);
          } else {
            const progress = Math.min((elapsed - scrambleDuration) / (duration - scrambleDuration), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = (target * eased).toFixed(decimals);
            if (progress < 1) requestAnimationFrame(tick);
          }
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));

  // ═══ 3D TILT CARDS ═══
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      const cx = rect.width / 2, cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -6;
      const rotateY = ((x - cx) / cx) * 6;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ═══ MAGNETIC BUTTONS ═══
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // ═══ SMOOTH SCROLL ═══
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // ═══ TYPING EFFECT ═══
  const typedEl = document.getElementById('typedText');
  let typedTimeout = null;

  function resetTypedText(words) {
    if (typedTimeout) clearTimeout(typedTimeout);
    startTyping(words || translations[currentLang].typed_words);
  }

  function startTyping(words) {
    let wordIdx = 0, charIdx = 0, isDeleting = false;

    function typeLoop() {
      const current = words[wordIdx];
      if (!isDeleting) {
        typedEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          isDeleting = true;
          typedTimeout = setTimeout(typeLoop, 2400);
          return;
        }
        typedTimeout = setTimeout(typeLoop, 90);
      } else {
        typedEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          wordIdx = (wordIdx + 1) % words.length;
          typedTimeout = setTimeout(typeLoop, 300);
          return;
        }
        typedTimeout = setTimeout(typeLoop, 50);
      }
    }
    typedTimeout = setTimeout(typeLoop, 2000);
  }
  startTyping(translations.de.typed_words);

  // ═══ CONTACT FORM ═══
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      const successMsg = currentLang === 'de' ? '✓ Nachricht Gesendet!' : '✓ Message Sent!';
      btn.innerHTML = `<span>${successMsg}</span>`;
      btn.style.boxShadow = '0 0 40px var(--accent-glow2)';
      btn.disabled = true;
      setTimeout(() => { btn.innerHTML = orig; btn.style.boxShadow = ''; btn.disabled = false; form.reset(); }, 3000);
    });
  }

  // ═══ PARALLAX HUD PANELS ═══
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.hud-panel').forEach((panel, i) => {
      if (window.innerWidth > 1024) {
        panel.style.transform = `translateY(${scrolled * (0.03 + i * 0.015)}px)`;
      }
    });
  }, { passive: true });

  // ═══ SCANLINE TRIGGER ═══
  const scanCards = document.querySelectorAll('.futuristic-card, .career-card-futuristic, .platform-card, .contact-form-futuristic');
  const scanObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const line = entry.target.querySelector('.card-scan-line');
        if (line) { line.style.animation = 'none'; void line.offsetHeight; line.style.animation = 'scanLine 2.5s ease-in-out'; }
        scanObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  scanCards.forEach(card => scanObserver.observe(card));

});
