const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");
const marquee = document.getElementById("marquee");
const cards = document.querySelectorAll("#sponsorScroll > div");
const slides = document.querySelectorAll(".hero-slide");
document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;

  // Get slides based on viewport (desktop vs mobile)
  function getVisibleSlides() {
    const allSlides = document.querySelectorAll(".hero-slide");
    return Array.from(allSlides).filter(
      slide => slide.offsetParent !== null // only visible group
    );
  }

  function showSlide(index) {
    const slides = getVisibleSlides();
    if (!slides.length) return;

    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    const slides = getVisibleSlides();
    if (!slides.length) return;

    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Init
  showSlide(currentSlide);
  setInterval(nextSlide, 5000);

 
  window.addEventListener("resize", () => {
    currentSlide = 0;
    showSlide(currentSlide);
  });
});

marquee.addEventListener("mouseover", () => marquee.classList.add("paused"));
marquee.addEventListener("mouseout", () => marquee.classList.remove("paused"));

let lastScrollY = window.scrollY;

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
    if (currentScrollY > 100) {
      navbar.classList.add("bg-black/90", "backdrop-blur");
    } else {
      navbar.classList.remove("bg-black/90", "backdrop-blur");
    }

    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      navbar.classList.add("-translate-y-full");
    } else {
      navbar.classList.remove("-translate-y-full");
    }
  } else {
    navbar.classList.add("bg-black");
    navbar.classList.remove(
      "bg-black/90",
      "backdrop-blur",
      "-translate-y-full"
    );
  }

  lastScrollY = currentScrollY;
});

//

// Detect click on cards
cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => {
      c.classList.remove("active-card");
      c.classList.remove("bg-black", "text-white");
      c.classList.add("bg-white", "text-black", "border");
    });
    card.classList.add("active-card", "bg-black", "text-white");
    card.classList.remove("bg-white", "text-black", "border");
  });
});

// Detect scroll snap (make visible card active)
const container = document.getElementById("sponsorScroll");
container.addEventListener("scroll", () => {
  let center = container.scrollLeft + container.offsetWidth / 2;
  let closestCard = null;
  let closestDist = Infinity;

  cards.forEach((card) => {
    let cardCenter = card.offsetLeft + card.offsetWidth / 2;
    let dist = Math.abs(center - cardCenter);
    if (dist < closestDist) {
      closestDist = dist;
      closestCard = card;
    }
  });

  if (closestCard) {
    cards.forEach((c) => {
      c.classList.remove("active-card");
      c.classList.remove("bg-black", "text-white");
      c.classList.add("bg-white", "text-black", "border");
    });
    closestCard.classList.add("active-card", "bg-black", "text-white");
    closestCard.classList.remove("bg-white", "text-black", "border");
  }
});
