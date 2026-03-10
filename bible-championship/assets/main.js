const videoData = {
    today: {
      title: "House Update — Day 12 Highlights",
      date: "Today · 2.4k watching",
      tag: "Live",
      duration: "28:14",
      progress: 35
    },
    week: {
      title: "Week 2 Recap — Best Moments",
      date: "3 days ago · 18.7k views",
      tag: "Recap",
      duration: "14:52",
      progress: 0
    },
    month: {
      title: "Month in Review — Champions Edition",
      date: "2 weeks ago · 54.1k views",
      tag: "Featured",
      duration: "42:08",
      progress: 0
    },
    all: {
      title: "Season 1 Full Highlights",
      date: "3 months ago · 210k views",
      tag: "Classic",
      duration: "1:12:33",
      progress: 0
    }
  };

  function handleFilter(value) {
    const data = videoData[value];
    document.getElementById('videoTitle').textContent = data.title;
    document.getElementById('videoDate').textContent = data.date;
    document.getElementById('duration').textContent = data.duration;
    document.getElementById('progressBar').style.width = data.progress + '%';

    const tagEl = document.getElementById('videoTag');
    tagEl.textContent = data.tag;

    const liveBadge = document.querySelector('.live-badge');
    liveBadge.style.display = value === 'today' ? 'flex' : 'none';

    // Animate card
    const card = document.getElementById('videoCard');
    card.style.opacity = '0';
    card.style.transform = 'scale(0.97)';
    card.style.transition = 'opacity 0.2s, transform 0.2s';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    }, 200);

    // Update overlay title
    document.querySelector('.overlay-title').textContent = data.title;
  }

  function openVideo() {
    document.getElementById('videoOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    document.getElementById('videoOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  function handleOverlayClick(e) {
    if (e.target === document.getElementById('videoOverlay')) closeVideo();
  }

  function handleRegister(e) {
    e.preventDefault();
    const btn = e.currentTarget;
    const original = btn.innerHTML;
    btn.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="animation:spin 0.6s linear infinite"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg> Registering...`;
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
      btn.innerHTML = `✓ Registered!`;
      btn.style.background = 'linear-gradient(135deg, #16a34a, #15803d)';
      btn.style.boxShadow = '0 4px 24px rgba(22,163,74,0.35)';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        btn.style.boxShadow = '';
        btn.style.pointerEvents = '';
      }, 3000);
    }, 1800);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
  });

  // Init progress bar
  setTimeout(() => {
    document.getElementById('progressBar').style.width = '35%';
    document.getElementById('progressBar').style.transition = 'width 1.2s cubic-bezier(0.4,0,0.2,1)';
  }, 500);