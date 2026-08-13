
function switchTab(tab) {
      const btnQualifiers = document.getElementById('btn-qualifiers');
      const btnWinners = document.getElementById('btn-winners');
      const tabQualifiers = document.getElementById('tab-qualifiers');
      const tabWinners = document.getElementById('tab-winners');

      if (tab === 'qualifiers') {
        // Active Button Style
        btnQualifiers.className = "px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 bg-amber-500 text-black shadow-md";
        btnWinners.className = "px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 text-zinc-400 hover:text-white";
        
        // Show Table
        tabQualifiers.classList.remove('hidden');
        tabWinners.classList.add('hidden');
      } else {
        // Active Button Style
        btnWinners.className = "px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 bg-amber-500 text-black shadow-md";
        btnQualifiers.className = "px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 text-zinc-400 hover:text-white";
        
        // Show Table
        tabWinners.classList.remove('hidden');
        tabQualifiers.classList.add('hidden');
      }
    }

let activeTab = 'testimonials';

    function switchCommunityTab(tab) {
      activeTab = tab;
      const tabs = ['testimonials', 'stories', 'gallery', 'featured'];

      tabs.forEach(t => {
        const btn = document.getElementById(`tab-btn-${t}`);
        const panel = document.getElementById(`content-${t}`);

        if (t === tab) {
          btn.className = "flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 bg-amber-500 text-black shadow-md";
          panel.classList.remove('hidden');
        } else {
          btn.className = "flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 text-zinc-400 hover:text-white";
          panel.classList.add('hidden');
        }
      });
    }

    function scrollCarousel(direction) {
      const activeContainer = document.getElementById(`scroll-container-${activeTab}`);
      if (activeContainer) {
        const scrollAmount = 300 * direction;
        activeContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }

// Data mapping for each option in the Filter Dropdown
    const activitiesData = {
      bts: {
        title: "Behind the Scenes",
        subTitle: "Exclusive Studio Preparation & Crew Setup",
        poster: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      reg_auditions: {
        title: "Registration & Audition Highlights",
        subTitle: "Highlights from nationwide family registrations",
        poster: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      entrance: {
        title: "The Splendid Entrance",
        subTitle: "Red Carpet and Grand Entrance of Families",
        poster: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      host: {
        title: "Meet the Host",
        subTitle: "Official Host Introduction & Studio Fun Clips",
        poster: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      families: {
        title: "Meet the Families",
        subTitle: "Profiles of top qualifying families",
        poster: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      interviews: {
        title: "Family Interviews",
        subTitle: "Emotional and fun backstage interviews",
        poster: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      auditions: {
        title: "Audition Highlights",
        subTitle: "Top scored home video audition clips",
        poster: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      games: {
        title: "Games & Tasks",
        subTitle: "Thrilling stage challenges and brain teasers",
        poster: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      challenges: {
        title: "Challenge Highlights",
        subTitle: "Best task completion moments",
        poster: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      homeplay: {
        title: "Home Play Highlights",
        subTitle: "Online audience participation & quiz winners",
        poster: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      prize_unveil: {
        title: "The Grand Prize Unveiling",
        subTitle: "Revealing the car, cash, and luxury rewards",
        poster: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      prize_present: {
        title: "The Presentation of the Grand Prize",
        subTitle: "Official handing over of the championship trophies",
        poster: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      winners: {
        title: "Winners' Celebration",
        subTitle: "Victory dance & family celebratory moments",
        poster: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      best_moments: {
        title: "Best Moments",
        subTitle: "Compilation of season's funniest & most emotional clips",
        poster: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      },
      upcoming: {
        title: "Upcoming Edition",
        subTitle: "Sneak peek & registration details for Edition Two",
        poster: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "http://googleusercontent.com/video_gen_chip/0"
      }
    };

    // Filter Change Event Handler
    function onActivityChange(selectedKey) {
      const data = activitiesData[selectedKey];
      if (!data) return;

      // Update section headers and video subtitles
      document.getElementById('activeActivityTitle').innerText = data.title;
      document.getElementById('videoSubTitle').innerText = data.subTitle;

      // Update Video Player Source & Poster
      const player = document.getElementById('mainVideoPlayer');
      const source = document.getElementById('videoSource');
      
      player.poster = data.poster;
      source.src = data.videoUrl;
      player.load();
      player.play().catch(err => console.log('Autoplay deferred until user interaction'));
    }

// Gallery Datasets corresponding to Filter Categories
    const galleryCategories = {
      winners: [
        {
          img1: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop", label1: "Grand Finale Winners Celebration",
          img2: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=800&auto=format&fit=crop", label2: "Car Prize Key Presentation",
          img3: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop", label3: "Trophy Unveiling On Stage"
        },
        {
          img1: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", label1: "Stage Fireworks & Confetti",
          img2: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", label2: "Emotional Victory Hugs",
          img3: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop", label3: "Champions Photo Session"
        }
      ],
      family: [
        {
          img1: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=800&auto=format&fit=crop", label1: "The Adeoye Family On Stage",
          img2: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop", label2: "The Okafor Family Game Challenge",
          img3: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop", label3: "The Babatunde Family Arrival"
        }
      ],
      others: [
        {
          img1: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", label1: "Studio Backstage Crew",
          img2: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", label2: "Host & Special Guests",
          img3: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop", label3: "Audience Cheering Section"
        }
      ]
    };

    let activeCategory = 'winners';
    let currentPageIndex = 0;

    function filterGalleryCategory(category) {
      activeCategory = category;
      currentPageIndex = 0;
      updateGalleryDisplay();
    }

    function changeGalleryPage(direction) {
      const pages = galleryCategories[activeCategory];
      currentPageIndex = (currentPageIndex + direction + pages.length) % pages.length;
      updateGalleryDisplay();
    }

    function updateGalleryDisplay() {
      const currentData = galleryCategories[activeCategory][currentPageIndex];
      
      if (currentData) {
        document.getElementById('img1').src = currentData.img1;
        document.getElementById('label1').innerText = currentData.label1;

        document.getElementById('img2').src = currentData.img2;
        document.getElementById('label2').innerText = currentData.label2;

        document.getElementById('img3').src = currentData.img3;
        document.getElementById('label3').innerText = currentData.label3;
      }

      // Update Pagination Indicator Dots
      const dotsContainer = document.getElementById('paginationDots');
      const totalPages = galleryCategories[activeCategory].length;
      let dotsHTML = '';

      for (let i = 0; i < Math.max(totalPages, 3); i++) {
        if (i === currentPageIndex) {
          dotsHTML += `<span class="w-5 h-1.5 bg-amber-500 rounded-full transition-all duration-300"></span>`;
        } else {
          dotsHTML += `<span class="w-1.5 h-1.5 bg-zinc-700 rounded-full transition-all duration-300"></span>`;
        }
      }
      dotsContainer.innerHTML = dotsHTML;
    }

const tabKeys = ['latest', 'events', 'press'];
    let activeTabIndex = 0;

    // TAB SWITCHER FUNCTION
    function switchNewsTab(selectedKey) {
      activeTabIndex = tabKeys.indexOf(selectedKey);

      tabKeys.forEach(key => {
        const btn = document.getElementById(`tab-btn-${key}`);
        const panel = document.getElementById(`content-${key}`);

        if (key === selectedKey) {
          btn.className = "flex items-center space-x-2 px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 bg-amber-500 text-black shadow-lg";
          panel.classList.remove('hidden');
        } else {
          btn.className = "flex items-center space-x-2 px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 text-zinc-400 hover:text-white";
          panel.classList.add('hidden');
        }
      });
    }

    // MOBILE SWIPE GESTURE DETECTOR
    const newsSwipeContainer = document.getElementById('swipeContainer');
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    newsSwipeContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    newsSwipeContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleNewsSwipe();
    }, { passive: true });

    function handleNewsSwipe() {
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Ensure horizontal swipe is dominant (prevents triggering when scrolling vertically)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX < 0) {
          // Swipe Left -> Go Next Tab
          if (activeTabIndex < tabKeys.length - 1) {
            switchNewsTab(tabKeys[activeTabIndex + 1]);
          }
        } else {
          // Swipe Right -> Go Prev Tab
          if (activeTabIndex > 0) {
            switchNewsTab(tabKeys[activeTabIndex - 1]);
          }
        }
      }
    }

document.querySelectorAll(".faq-question").forEach((question) => {
      question.addEventListener("click", () => {
        const currentItem = question.closest(".faq-item");

        // Close other FAQ panels
        document.querySelectorAll(".faq-item").forEach((item) => {
          if (item !== currentItem) {
            item.classList.remove("active");
          }
        });

        // Toggle clicked FAQ panel
        currentItem.classList.toggle("active");
      });
    });

lucide.createIcons();

    /* ===================== Navbar: mobile menu open/close ===================== */
    document.getElementById('openMenu').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    document.getElementById('closeMenu').addEventListener('click', closeMobileMenu);

    // Close the mobile menu when tapping the dark backdrop (outside the menu card)
    document.getElementById('mobileMenu').addEventListener('click', (e) => {
      if (e.target.id === 'mobileMenu') closeMobileMenu();
    });

    function closeMobileMenu() {
      document.getElementById('mobileMenu').classList.add('hidden');
      document.body.style.overflow = '';
    }

    /* ===================== Navbar: dynamic spacing ===================== */
    // Keeps the header pinned directly under the marquee and pushes page content
    // down by the exact combined height of both fixed bars, on load and resize.
    function adjustHeaderSpacing() {
      const marquee = document.getElementById('marqueeBar');
      const header = document.getElementById('mainHeader');
      const spacer = document.getElementById('headerSpacer');
      if (!marquee || !header || !spacer) return;

      const marqueeHeight = marquee.offsetHeight;
      header.style.top = marqueeHeight + 'px';
      spacer.style.height = (marqueeHeight + header.offsetHeight) + 'px';
    }

    window.addEventListener('load', adjustHeaderSpacing);
    window.addEventListener('resize', adjustHeaderSpacing);

