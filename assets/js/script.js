const mobileMenu = document.getElementById("mobileMenu");
document.getElementById("openMenu").onclick = () =>
  mobileMenu.classList.remove("hidden");
document.getElementById("closeMenu").onclick = () =>
  mobileMenu.classList.add("hidden");

window.addEventListener("scroll", () => {
  document
    .querySelector("header div")
    .classList.toggle("backdrop-blur-2xl", window.scrollY > 10);
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-button");
  const content = item.querySelector(".faq-content");
  const icon = item.querySelector(".faq-icon");

  // ✅ Close all FAQs by default
  content.style.maxHeight = "0px";
  content.style.paddingTop = "0px";
  content.style.paddingBottom = "0px";
  icon.textContent = "⊕";

  button.addEventListener("click", () => {
    const isOpen = content.style.maxHeight !== "0px";

    // ✅ Close all other FAQs
    faqItems.forEach((otherItem) => {
      const otherContent = otherItem.querySelector(".faq-content");
      const otherIcon = otherItem.querySelector(".faq-icon");

      otherContent.style.maxHeight = "0px";
      otherContent.style.paddingTop = "0px";
      otherContent.style.paddingBottom = "0px";
      otherIcon.textContent = "⊕";
    });

    // ✅ Open clicked FAQ if it was closed
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = "";
      content.style.paddingBottom = "";
      icon.textContent = "⊖";
    }
  });
});




// const swiper = new Swiper(".programSwiper", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 24,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 24,
//     },
//     1280: {
//       slidesPerView: 5,
//       spaceBetween: 24,
//     },
//   },
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
// });

// Partner Modal
const modal = document.getElementById("partnerModal");
const openBtns = document.querySelectorAll(".open-partner-modal");
const closeBtn = document.getElementById("closePartnerModal");

const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextStep");
const prevBtn = document.getElementById("prevStep");
const stepNumber = document.getElementById("stepNumber");
const progressBar = document.getElementById("progressBar");
const paymentBtn = document.getElementById("paymentConfirmed");

let currentStep = 0;
let paymentMade = false;
const LAST_STEP_INDEX = steps.length - 1;

/* ---------- OPEN MODAL ---------- */
openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    currentStep = 0;
    paymentMade = false;
    resetPaymentButton();
    updateStep();
  });
});

/* ---------- CLOSE MODAL ---------- */
closeBtn.onclick = () => closeModal();
modal.addEventListener("click", (e) => e.target === modal && closeModal());
document.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());

function closeModal() {
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

/* ---------- UPDATE STEP ---------- */
function updateStep() {
  steps.forEach((step, index) => {
    step.classList.toggle("hidden", index !== currentStep);
  });

  stepNumber.textContent = currentStep + 1;
  progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;

  prevBtn.style.visibility = currentStep === 0 ? "hidden" : "visible";

  // 🔹 Change button text on last step
  nextBtn.textContent =
    currentStep === LAST_STEP_INDEX ? "Submit" : "Next";

  validateCurrentStep();
}

/* ---------- VALIDATION LOGIC ---------- */
function validateCurrentStep() {
  nextBtn.disabled = true;
  const activeStep = steps[currentStep];

  // STEP 5 — OFFLINE PAYMENT
  if (currentStep === 4) {
    nextBtn.disabled = !paymentMade;
    return;
  }

  // RADIO STEPS (1, 2, 4, 6)
  const radios = activeStep.querySelectorAll('input[type="radio"]');
  if (radios.length) {
    radios.forEach((radio) => {
      if (radio.checked) nextBtn.disabled = false;
    });
    return;
  }

  // STEP 3 FORM
  if (activeStep.id === "step3") {
    const inputs = [
      document.getElementById("fullName"),
      document.getElementById("email"),
      document.getElementById("phone"),
      document.getElementById("amount"),
    ];

    const allFilled = inputs.every(
      (input) => input.value.trim() !== ""
    );

    nextBtn.disabled = !allFilled;
  }
}

/* ---------- STEP NAVIGATION ---------- */
nextBtn.onclick = () => {
  // 🔹 Submit on last step
  if (currentStep === LAST_STEP_INDEX) {
    handleSubmit();
    return;
  }

  if (currentStep < LAST_STEP_INDEX) {
    currentStep++;
    updateStep();
  }
};

prevBtn.onclick = () => {
  if (currentStep > 0) {
    currentStep--;
    updateStep();
  }
};

/* ---------- INPUT LISTENERS ---------- */
document.addEventListener("change", validateCurrentStep);
document.addEventListener("input", validateCurrentStep);

/* ---------- PAYMENT CONFIRMATION ---------- */
if (paymentBtn) {
  paymentBtn.addEventListener("click", () => {
    paymentMade = true;
    validateCurrentStep();

    paymentBtn.textContent = "Payment Confirmed";
    paymentBtn.disabled = true;
    paymentBtn.classList.add("opacity-70", "cursor-not-allowed");
  });
}

/* ---------- RESET PAYMENT BUTTON ---------- */
function resetPaymentButton() {
  if (!paymentBtn) return;

  paymentBtn.textContent = "I Have Made Payment";
  paymentBtn.disabled = false;
  paymentBtn.classList.remove("opacity-70", "cursor-not-allowed");
}

/* ---------- FINAL SUBMIT ---------- */
function handleSubmit() {
  nextBtn.disabled = true;
  nextBtn.textContent = "Submitting...";

  // TODO: replace with real API call
  setTimeout(() => {
    alert("Thank you! Your submission has been received.");
    closeModal();
  }, 1000);
}

/* ---------- INIT ---------- */
updateStep();
// Video Filter Logic
  const video = document.getElementById("houseVideo");
  const source = document.getElementById("videoSource");
  const playBtn = document.getElementById("playBtn");
  const filter = document.getElementById("videoFilter");

  const videos = {
    today: {
      src: "video-today.mp4",
      poster: "poster-today.jpg",
    },
    week: {
      src: "video-week.mp4",
      poster: "poster-week.jpg",
    },
    month: {
      src: "video-month.mp4",
      poster: "poster-month.jpg",
    },
  };

  filter.addEventListener("change", () => {
    const selected = videos[filter.value];

    video.pause();
    source.src = selected.src;
    video.poster = selected.poster;
    video.load();

    playBtn.classList.remove("hidden");
    video.removeAttribute("controls");
  });

  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.classList.add("hidden");
    video.setAttribute("controls", "true");
  });



/* ================= COUNTDOWN TO JANUARY 1 ================= */

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function getNextJanuaryFirst() {
  const now = new Date();
  const year =
    now.getMonth() === 0 && now.getDate() === 1
      ? now.getFullYear()
      : now.getFullYear() + 1;

  return new Date(`January 1, ${year} 00:00:00`);
}

const targetDate = getNextJanuaryFirst();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

    