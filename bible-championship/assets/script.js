const card = document.getElementById("video-card");
const playBtn = document.getElementById("play-btn");
const playIcon = document.getElementById("play-icon");
const barFill = document.getElementById("bar-fill");

let playing = false;
let progress = 0;
let interval = null;

const pauseSVG = `<rect x="6" y="4" width="4" height="16" rx="1" fill="white"/><rect x="14" y="4" width="4" height="16" rx="1" fill="white"/>`;
const playSVG = `<polygon points="5 3 19 12 5 21 5 3" fill="white"/>`;

playBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePlay();
});

function togglePlay() {
  playing = !playing;
  playIcon.innerHTML = playing ? pauseSVG : playSVG;

  if (playing) {
    interval = setInterval(() => {
      progress = Math.min(progress + 0.12, 100);
      barFill.style.width = progress + "%";

      if (progress >= 100) {
        clearInterval(interval);
        playing = false;
        playIcon.innerHTML = playSVG;
        progress = 0;
        barFill.style.width = "0%";
      }
    }, 100);
  } else {
    clearInterval(interval);
  }
}

//

const images = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
    caption: "Celebration Moments",
  },
  {
    src: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=900&q=80",
    caption: "Family & Friends",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
    caption: "Special Events",
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=80",
    caption: "Together We Shine",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
    caption: "Crowd Energy",
  },
  {
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&q=80",
    caption: "Live & Loud",
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=80",
    caption: "Night Vibes",
  },
];

let current = 0;
const track = document.getElementById("carouselTrack");
const dotBar = document.getElementById("dotBar");
const counter = document.getElementById("counter");

images.forEach((img, i) => {
  const slide = document.createElement("div");

  slide.className = "flex-shrink-0 px-2 transition-all duration-300";

  slide.innerHTML = `
<img src="${img.src}" class="rounded-xl object-cover w-[300px] h-[170px] cursor-pointer"/>
`;

  slide.onclick = () => openLightbox(i);

  track.appendChild(slide);

  const dot = document.createElement("div");
  dot.className = "h-1 w-2 bg-white/30 rounded-full cursor-pointer";
  dot.onclick = () => goTo(i);

  dotBar.appendChild(dot);
});

function update() {
  track.style.transform = `translateX(${-current * 320}px)`;

  counter.textContent = `${current + 1} / ${images.length}`;

  Array.from(dotBar.children).forEach((d, i) => {
    d.classList.toggle("bg-orange-500", i === current);
  });
}

function goTo(i) {
  current = (i + images.length) % images.length;
  update();
}

document.getElementById("prevBtn").onclick = () => goTo(current - 1);
document.getElementById("nextBtn").onclick = () => goTo(current + 1);

update();

/* LIGHTBOX */

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");

let lbIndex = 0;

function openLightbox(i) {
  lbIndex = i;

  lbImg.src = images[i].src;
  lbCaption.textContent = images[i].caption;

  lightbox.classList.remove("opacity-0", "pointer-events-none");

  document.body.classList.add("overflow-hidden");
}

function closeLightbox() {
  lightbox.classList.add("opacity-0", "pointer-events-none");
  document.body.classList.remove("overflow-hidden");
}

document.getElementById("lbClose").onclick = closeLightbox;
document.getElementById("lbPrev").onclick = () =>
  openLightbox((lbIndex - 1 + images.length) % images.length);
document.getElementById("lbNext").onclick = () =>
  openLightbox((lbIndex + 1) % images.length);


