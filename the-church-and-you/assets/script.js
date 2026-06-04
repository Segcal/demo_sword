const episodes = [
    // Season 3
    { season: 3, ep: 12, title: 'The Grand Finale: Last Man Standing',   date: 'Feb 14, 2026', duration: '48:22', color: 'from-orange-900/40', accent: 'text-orange-400/60',  youtube: 'dQw4w9WgXcQ' },
    { season: 3, ep: 11, title: 'Clash of Champions — Semi-Finals',       date: 'Feb 7, 2026',  duration: '52:07', color: 'from-red-900/40',    accent: 'text-red-400/60',     youtube: 'dQw4w9WgXcQ' },
    { season: 3, ep: 10, title: 'Double Elimination Round',               date: 'Jan 31, 2026', duration: '44:55', color: 'from-amber-900/40',  accent: 'text-amber-400/60',   youtube: 'dQw4w9WgXcQ' },
    { season: 3, ep: 9,  title: 'Fan Vote Shake-Up!',                     date: 'Jan 24, 2026', duration: '39:14', color: 'from-emerald-900/40',accent: 'text-emerald-400/60', youtube: 'dQw4w9WgXcQ' },
    { season: 3, ep: 8,  title: 'Midnight Madness Challenge',             date: 'Jan 17, 2026', duration: '41:38', color: 'from-blue-900/40',   accent: 'text-blue-400/60',    youtube: 'dQw4w9WgXcQ' },
    { season: 3, ep: 7,  title: 'The Plot Twist Nobody Saw Coming',       date: 'Jan 10, 2026', duration: '46:02', color: 'from-purple-900/40', accent: 'text-purple-400/60',  youtube: 'dQw4w9WgXcQ' },
    // Season 2
    { season: 2, ep: 6,  title: 'Season 2 Finale: Unbreakable',          date: 'Nov 22, 2025', duration: '54:11', color: 'from-pink-900/40',   accent: 'text-pink-400/60',    youtube: 'dQw4w9WgXcQ' },
    { season: 2, ep: 5,  title: 'The Comeback Episode',                   date: 'Nov 15, 2025', duration: '47:30', color: 'from-rose-900/40',   accent: 'text-rose-400/60',    youtube: 'dQw4w9WgXcQ' },
    { season: 2, ep: 4,  title: 'Surprise Guest Takeover',               date: 'Nov 8, 2025',  duration: '50:05', color: 'from-fuchsia-900/40',accent: 'text-fuchsia-400/60', youtube: 'dQw4w9WgXcQ' },
    { season: 2, ep: 3,  title: 'Rules Were Made to Be Broken',          date: 'Nov 1, 2025',  duration: '43:19', color: 'from-violet-900/40', accent: 'text-violet-400/60',  youtube: 'dQw4w9WgXcQ' },
    { season: 2, ep: 2,  title: 'New Faces, Old Flames',                 date: 'Oct 25, 2025', duration: '38:44', color: 'from-indigo-900/40', accent: 'text-indigo-400/60',  youtube: 'dQw4w9WgXcQ' },
    { season: 2, ep: 1,  title: 'Season 2 Premiere: Rise Up',            date: 'Oct 18, 2025', duration: '42:58', color: 'from-sky-900/40',    accent: 'text-sky-400/60',     youtube: 'dQw4w9WgXcQ' },
    // Season 1
    { season: 1, ep: 4,  title: 'Season 1 Finale: The Beginning of Everything', date: 'Aug 10, 2025', duration: '51:22', color: 'from-teal-900/40',   accent: 'text-teal-400/60',   youtube: 'dQw4w9WgXcQ' },
    { season: 1, ep: 3,  title: 'Turning Point',                          date: 'Aug 3, 2025',  duration: '44:07', color: 'from-cyan-900/40',   accent: 'text-cyan-400/60',    youtube: 'dQw4w9WgXcQ' },
    { season: 1, ep: 2,  title: 'Finding Our Footing',                    date: 'Jul 27, 2025', duration: '37:55', color: 'from-lime-900/40',   accent: 'text-lime-400/60',    youtube: 'dQw4w9WgXcQ' },
    { season: 1, ep: 1,  title: 'Pilot: Where It All Began',             date: 'Jul 20, 2025', duration: '32:18', color: 'from-green-900/40',  accent: 'text-green-400/60',   youtube: 'dQw4w9WgXcQ' },
  ];

  const PAGE_SIZE = 6;
  let activeSeason = 'all';
  let visibleCount = PAGE_SIZE;

  // ─── Render Episodes ────────────────────────────────────────────────────────
  function renderEpisodes() {
    const grid = document.getElementById('episodesGrid');
    const empty = document.getElementById('emptyState');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    const filtered = activeSeason === 'all'
      ? episodes
      : episodes.filter(e => String(e.season) === activeSeason);

    const toShow = filtered.slice(0, visibleCount);

    if (filtered.length === 0) {
      grid.innerHTML = '';
      empty.classList.remove('hidden');
      loadMoreBtn.classList.add('hidden');
      return;
    }

    empty.classList.add('hidden');
    loadMoreBtn.classList.toggle('hidden', visibleCount >= filtered.length);

    grid.innerHTML = toShow.map(ep => `
      <a href="https://www.youtube.com/watch?v=${ep.youtube}"
         target="_blank" rel="noopener noreferrer"
         class="episode-card rounded-xl overflow-hidden block group">
        <div class="episode-thumb aspect-video relative">
          <!-- YouTube thumbnail -->
          <img
            src="https://img.youtube.com/vi/${ep.youtube}/mqdefault.jpg"
            alt="${ep.title}"
            class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            onerror="this.style.display='none'"
          />
          <div class="absolute inset-0 bg-gradient-to-br ${ep.color} via-gray-900/60 to-black/80 flex items-end p-3">
            <div class="ep-play">
              <svg class="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span class="${ep.accent} text-4xl font-black opacity-40 select-none">EP ${ep.ep}</span>
          </div>
          <!-- YouTube logo badge -->
          <div class="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div class="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
              Watch
            </div>
          </div>
          <span class="ep-duration">${ep.duration}</span>
        </div>
        <div class="p-4">
          <span class="text-orange-400 text-xs font-semibold tracking-widest uppercase">Season ${ep.season} · Ep ${ep.ep}</span>
          <h3 class="text-white font-semibold mt-1 text-sm leading-snug group-hover:text-orange-300 transition-colors">${ep.title}</h3>
          <div class="flex items-center justify-between mt-1">
            <p class="text-white/40 text-xs">${ep.date}</p>
            <span class="text-white/30 text-xs flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              YouTube
            </span>
          </div>
        </div>
      </a>
    `).join('');
  }

  // ─── Season Filter ──────────────────────────────────────────────────────────
  function filterSeason(season) {
    activeSeason = season;
    visibleCount = PAGE_SIZE;

    // Update button styles
    document.querySelectorAll('.season-filter-btn').forEach(btn => {
      const isActive = btn.dataset.season === season;
      btn.className = isActive
        ? 'season-filter-btn active-filter px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all bg-orange-500 text-white'
        : 'season-filter-btn px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/50 hover:text-white/80 hover:bg-white/10 transition-all tracking-wide';
    });

    // Animate grid out then back in
    const grid = document.getElementById('episodesGrid');
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(10px)';
    setTimeout(() => {
      renderEpisodes();
      grid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      grid.style.opacity = '1';
      grid.style.transform = 'translateY(0)';
    }, 150);
  }

  // ─── Load More ──────────────────────────────────────────────────────────────
  document.getElementById('loadMoreBtn').addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    renderEpisodes();
  });

  // ─── Tab Toggle ─────────────────────────────────────────────────────────────
  let currentTab = 'live';

  function switchTab(tab) {
    if (tab === currentTab) return;
    currentTab = tab;

    const panelLive = document.getElementById('panelLive');
    const panelPast = document.getElementById('panelPast');
    const btnLive   = document.getElementById('btnLive');
    const btnPast   = document.getElementById('btnPast');

    if (tab === 'live') {
      btnLive.classList.add('active');
      btnPast.classList.remove('active');
      panelPast.classList.add('hidden-panel');
      panelLive.classList.remove('hidden-panel');
      panelLive.classList.add('entering');
      setTimeout(() => panelLive.classList.remove('entering'), 400);
    } else {
      btnPast.classList.add('active');
      btnLive.classList.remove('active');
      panelLive.classList.add('hidden-panel');
      panelPast.classList.remove('hidden-panel');
      panelPast.classList.add('entering');
      setTimeout(() => panelPast.classList.remove('entering'), 400);
    }

    positionIndicator(tab);
  }

  function positionIndicator(tab) {
    const container = document.getElementById('toggleContainer');
    const btn = tab === 'live' ? document.getElementById('btnLive') : document.getElementById('btnPast');
    const indicator = document.getElementById('toggleIndicator');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    indicator.style.left  = (btnRect.left - containerRect.left - 4) + 'px';
    indicator.style.width = btnRect.width + 'px';
  }

  // ─── Init ───────────────────────────────────────────────────────────────────
  window.addEventListener('load', () => {
    positionIndicator('live');
    renderEpisodes();
  });
  window.addEventListener('resize', () => positionIndicator(currentTab));



   const images = [
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80', caption: 'Celebration Moments' },
    { src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=900&q=80', caption: 'Family & Friends' },
    { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80', caption: 'Special Events' },
    { src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=80', caption: 'Together We Shine' },
    { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80', caption: 'Crowd Energy' },
    { src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&q=80', caption: 'Live & Loud' },
    { src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=80', caption: 'Night Vibes' },
  ];

  let current = 0;
  const total = images.length;
  let autoTimer = null;
  let touchStartX = 0;

  // ─── Build DOM ────────────────────────────────────────────────────────
  const track   = document.getElementById('carouselTrack');
  const dotBar  = document.getElementById('dotBar');
  const counter = document.getElementById('counter');

  // Slides
  images.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.dataset.index = i;
    slide.innerHTML = `<img src="${img.src}" alt="${img.caption}" draggable="false"/>`;
    // Click to open lightbox
    slide.addEventListener('click', () => {
      if (i === current) openLightbox(i);
      else goTo(i);
    });
    track.appendChild(slide);
  });

  // Dots
  images.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot';
    d.style.width = '8px';
    d.addEventListener('click', () => goTo(i));
    dotBar.appendChild(d);
  });

  // ─── Layout helpers ───────────────────────────────────────────────────────
  function getSlideWidth() {
    const outer = document.getElementById('carouselOuter');
    const w = outer.offsetWidth;
    if (w < 480)  return w * 0.78;
    if (w < 768)  return w * 0.62;
    if (w < 1024) return w * 0.52;
    return Math.min(w * 0.46, 640);
  }

  function getGap() {
    const w = document.getElementById('carouselOuter').offsetWidth;
    return w < 640 ? 12 : 20;
  }

  function updateLayout() {
    const slides = track.querySelectorAll('.slide');
    const sw = getSlideWidth();
    const gap = getGap();
    const ratio = 9/16;

    slides.forEach((slide, i) => {
      slide.style.width  = sw + 'px';
      slide.style.height = (sw * ratio) + 'px';
      slide.style.marginLeft  = i === 0 ? '0' : gap/2 + 'px';
      slide.style.marginRight = i === total - 1 ? '0' : gap/2 + 'px';
    });

    updateTrackPosition(false);
    updateStyles();
  }

  function updateTrackPosition(animate = true) {
    const sw    = getSlideWidth();
    const gap   = getGap();
    const outer = document.getElementById('carouselOuter');
    const outerW = outer.offsetWidth;

    // Center the current slide
    const offset = (outerW / 2) - (sw / 2) - current * (sw + gap);
    track.style.transition = animate ? 'transform 0.55s cubic-bezier(0.4,0,0.2,1)' : 'none';
    track.style.transform  = `translateX(${offset}px)`;
  }

  function updateStyles() {
    const slides = track.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
      const diff = Math.abs(i - current);
      slide.classList.remove('center','side','far');
      if (diff === 0) slide.classList.add('center');
      else if (diff === 1) slide.classList.add('side');
      else slide.classList.add('far');
    });

    // Dots
    const dots = dotBar.querySelectorAll('.dot');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
      d.style.width = i === current ? '28px' : '8px';
    });

    // Counter
    counter.textContent = `${current + 1} / ${total}`;
  }

  // ─── Navigation ───────────────────────────────────────────────────────────
  function goTo(index) {
    current = (index + total) % total;
    updateTrackPosition(true);
    updateStyles();
    resetAuto();
  }

  document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
  document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'Escape')     closeLightbox();
  });

  // Touch swipe on carousel
  const outer = document.getElementById('carouselOuter');
  outer.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  outer.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) dx < 0 ? goTo(current + 1) : goTo(current - 1);
  });

  // Auto advance
  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 4500);
  }
  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  // ─── Lightbox ─────────────────────────────────────────────────────────────
  let lbIndex = 0;

  function openLightbox(i) {
    lbIndex = i;
    const lb = document.getElementById('lightbox');
    document.getElementById('lbImg').src = images[i].src;
    document.getElementById('lbCaption').textContent = `${images[i].caption}  ·  ${i+1} / ${total}`;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }

  function lbGoTo(i) {
    lbIndex = (i + total) % total;
    document.getElementById('lbImg').src = images[lbIndex].src;
    document.getElementById('lbCaption').textContent = `${images[lbIndex].caption}  ·  ${lbIndex+1} / ${total}`;
  }

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', () => lbGoTo(lbIndex - 1));
  document.getElementById('lbNext').addEventListener('click', () => lbGoTo(lbIndex + 1));
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });

  // Touch swipe on lightbox
  const lb = document.getElementById('lightbox');
  lb.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) dx < 0 ? lbGoTo(lbIndex + 1) : lbGoTo(lbIndex - 1);
  });

  // ─── Init ─────────────────────────────────────────────────────────────────
  window.addEventListener('load', () => {
    updateLayout();
    startAuto();
  });
  window.addEventListener('resize', () => updateLayout());

  
  const faqs = [
    {
      q: 'How can I share my experience about my church?',
      a: 'Use the Feedback Form to submit experiences, concerns, or reflections. You may also include short videos, photos, or documents as evidence.'
    },
    {
      q: 'Will pastors or churches be criticized publicly?',
      a: 'No. The platform is constructive and advisory, focusing on learning, guidance, and improving understanding, not to attack pastors or churches.'
    },
    {
      q: 'Can I ask questions during live streaming?',
      a: 'Yes, viewers can submit questions in real-time. Selected questions are answered during the show by experts or hosts.'
    },
    {
      q: 'How are submissions reviewed?',
      a: 'Submissions are reviewed by the show team. Selected stories or questions are used to inform episodes, create discussions, or provide advice.'
    },
    {
      q: 'Are video testimonies or picture evidence accepted?',
      a: 'Yes. Viewers can send short videos or images supporting their experience, which may be incorporated into the show.'
    },
    {
      q: 'Can I watch past episodes?',
      a: 'Yes, full episodes, highlights, and clips are accessible on the show page.'
    },
    {
      q: 'Is my identity kept confidential?',
      a: 'Yes. You may choose to remain anonymous when submitting your story. The show team handles all personal information with discretion.'
    },
    {
      q: 'What topics does Sword TV cover?',
      a: 'Sword TV covers church accountability, spiritual guidance, community stories, faith discussions, and live Q&A sessions with experts and hosts.'
    },
  ];

  const list = document.getElementById('faqList');

  faqs.forEach((faq, i) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <button class="faq-trigger" aria-expanded="false" aria-controls="ans-${i}">
        <span class="faq-question">${faq.q}</span>
        <span class="faq-icon">
          <!-- Minus icon (shown when open via rotate) -->
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"/>
          </svg>
        </span>
      </button>
      <div class="faq-answer-wrap" id="ans-${i}" role="region">
        <div class="faq-answer">${faq.a}</div>
      </div>
    `;

    const trigger = item.querySelector('.faq-trigger');
    const panel   = item.querySelector('.faq-answer-wrap');
    const answer  = item.querySelector('.faq-answer');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-answer-wrap').style.maxHeight = '0';
        el.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        panel.style.maxHeight = answer.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    list.appendChild(item);
  });


  const targetDate = new Date("Dec 30, 2026 23:59:59").getTime();

setInterval(() => {

  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2,'0');
  document.getElementById("hours").innerText = String(hours).padStart(2,'0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2,'0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2,'0');

}, 1000);

function toggleDropdown() {
    document.getElementById('dropdownMenu').classList.toggle('open');
  }
  function selectOption(el, label) {
    document.getElementById('selectedLabel').textContent = label;
    document.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('dropdownMenu').classList.remove('open');
  }
  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-wrap')) {
      document.getElementById('dropdownMenu').classList.remove('open');
    }
  });

// ─── Mobile Menu ────────────────────────────────────────────────────────────
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

// Close menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
});

// Close menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ─── Partner Modal ────────────────────────────────────────────────────────────
const partnerModal = document.getElementById('partnerModal');
const openPartnerBtns = document.querySelectorAll('.open-partner-modal');
const closePartnerBtn = document.getElementById('closePartnerModal');

let currentStep = 1;
const totalSteps = 6;

openPartnerBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    partnerModal.classList.remove('hidden');
    mobileMenu.classList.add('hidden');
  });
});

closePartnerBtn.addEventListener('click', () => {
  partnerModal.classList.add('hidden');
});

partnerModal.addEventListener('click', (e) => {
  if (e.target === partnerModal) {
    partnerModal.classList.add('hidden');
  }
});

// ─── Step Navigation ─────────────────────────────────────────────────────────
const nextStepBtn = document.getElementById('nextStep');
const prevStepBtn = document.getElementById('prevStep');
const steps = document.querySelectorAll('.step');
const stepNumber = document.getElementById('stepNumber');
const progressBar = document.getElementById('progressBar');
const participationSelect = document.getElementById('participationCategory');

function updateStep() {
  steps.forEach((step, index) => {
    if (index === currentStep - 1) {
      step.classList.remove('hidden');
    } else {
      step.classList.add('hidden');
    }
  });

  stepNumber.textContent = currentStep;
  const progress = (currentStep / totalSteps) * 100;
  progressBar.style.width = progress + '%';

  prevStepBtn.style.display = currentStep === 1 ? 'none' : 'block';
  
  if (currentStep === totalSteps) {
    nextStepBtn.textContent = 'Submit';
    nextStepBtn.type = 'button';
  } else {
    nextStepBtn.textContent = 'Next';
    nextStepBtn.type = 'button';
  }

  nextStepBtn.disabled = false;
}

// Handle conditional step 3 display based on participation category
participationSelect.addEventListener('change', () => {
  const value = participationSelect.value;
  
  // Hide all step 3 variations
  document.querySelectorAll('[class*="step-3-"]').forEach(el => {
    el.classList.add('hidden');
  });

  // Show the appropriate one based on selection
  if (value === 'share-story' || value === 'submit-experience') {
    document.querySelector('.step-3-story').classList.remove('hidden');
  } else if (value === 'connect-virtually' || value === 'live-audience') {
    document.querySelector('.step-3-virtual').classList.remove('hidden');
  } else if (value === 'sponsor-partner') {
    document.querySelector('.step-3-sponsor').classList.remove('hidden');
  } else if (value === 'volunteer') {
    document.querySelector('.step-3-volunteer').classList.remove('hidden');
  }
});

nextStepBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentStep < totalSteps) {
    currentStep++;
    updateStep();
  } else if (currentStep === totalSteps) {
    // Show success modal
    showSuccessModal();
  }
});

prevStepBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateStep();
  }
});

function showSuccessModal() {
  // Hide the form modal
  partnerModal.classList.add('hidden');
  // Show success modal
  const successModal = document.getElementById('successModal');
  if (successModal) {
    successModal.classList.remove('hidden');
  }
}

updateStep();