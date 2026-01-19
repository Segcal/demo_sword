const modal = document.getElementById("ticketModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const formContainer = document.getElementById("formContainer");
const optionsGrid = document.getElementById("optionsGrid");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const toast = document.getElementById("toast");

let selectedOption = null;
let currentStep = 1;
let currentFormHtml = ""; // To store the HTML for the personal info form

// Open modal
openBtn.addEventListener("click", () => modal.classList.remove("hidden"));

// Close modal
closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

// Track selection + highlight
document.querySelectorAll('input[name="ticket"]').forEach((input) => {
  input.addEventListener("change", (e) => {
    selectedOption = e.target.value;
    document.querySelectorAll(".option-card").forEach((card) => {
      card.classList.remove("border-blue-600", "bg-blue-50");
    });
    e.target.closest(".option-card").classList.add("border-blue-600", "bg-blue-50");
  });
});

// Main button functionality
nextBtn.addEventListener("click", () => {
  if (currentStep === 1) {
    goNext(); // Go from selection to personal info form
  } else if (currentStep === 2) {
    if (validatePersonalInfo()) {
      loadPaymentForm(); // Go from personal info to payment form
    }
  } else if (currentStep === 3) {
    // This is where you'd handle payment processing logic
    showToast("Processing payment...", "success");
    // In a real application, you would handle a backend call here.
  }
});

backBtn.addEventListener("click", () => {
  if (currentStep === 3) {
    // Go from payment back to personal info form
    formContainer.innerHTML = currentFormHtml;
    nextBtn.textContent = "PROCEED TO PAYMENT";
    nextBtn.classList.remove("bg-green-600", "hover:bg-green-700");
    nextBtn.classList.add("bg-blue-600", "hover:bg-blue-700");
    currentStep = 2;
  } else {
    goBack(); // Go from personal info back to selection screen
  }
});

// Function to load the personal information form based on selection
function goNext() {
  if (!selectedOption) {
    showToast("Please select an option first.", "error");
    return;
  }

  let url = "";
  switch (selectedOption) {
    case "regular":
      url = "assets/js/form/regular.html";
      break;
    case "vip":
      url = "assets/js/form/vip.html";
      break;
    case "table":
      url = "assets/js/form/table.html";
      break;
    case "exhibition":
      url = "assets/js/form/exhibition.html";
      break;
    case "workshop":
      url = "assets/js/form/workshop.html";
      break;
    case "cultural":
      url = "assets/js/form/cultural.html";
      break;
    case "showcase":
      url = "assets/js/form/showcase.html";
      break;
    case "volunteer":
      url = "assets/js/form/volunteer.html";
      break;
    case "resource":
      url = "assets/js/form/resource.html";
      break;
    default:
      url = "assets/js/form/regular.html"; // Fallback
  }

  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      optionsGrid.classList.add("hidden");
      formContainer.classList.remove("hidden");
      formContainer.innerHTML = html;
      currentFormHtml = html; // Store the loaded HTML
      nextBtn.textContent = "PROCEED TO PAYMENT";
      backBtn.classList.remove("hidden");
      currentStep = 2; // Update step to personal info form
    })
    .catch((err) => {
      console.error("Failed to load form:", err);
      showToast("Error loading form. Please try again.", "error");
    });
}

// Function to validate the personal information form
function validatePersonalInfo() {
  const fullName = formContainer.querySelector("#full-name").value.trim();
  const email = formContainer.querySelector("#email").value.trim();
  const phone = formContainer.querySelector("#phone-number").value.trim();
  const ticketNumber = formContainer.querySelector("#ticket-number").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9\s-()]{7,20}$/;

  if (fullName.length < 3) {
    showToast("Full name must be at least 3 characters.", "error");
    return false;
  }
  if (!emailRegex.test(email)) {
    showToast("Please enter a valid email address.", "error");
    return false;
  }
  if (!phoneRegex.test(phone)) {
    showToast("Please enter a valid phone number.", "error");
    return false;
  }
  if (parseInt(ticketNumber) < 1) {
    showToast("Please select at least 1 ticket.", "error");
    return false;
  }
  return true;
}

// Function to load the payment form
function loadPaymentForm() {
  const url = "assets/js/form/payment.html";

  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      formContainer.innerHTML = html;
      nextBtn.textContent = "PAY";
      nextBtn.classList.remove("bg-blue-600", "hover:bg-blue-700");
      nextBtn.classList.add("bg-green-600", "hover:bg-green-700");
      currentStep = 3;
    })
    .catch((err) => {
      console.error("Failed to load payment form:", err);
      showToast("Error loading payment form. Please try again.", "error");
    });
}

// Function to go back to the selection screen
function goBack() {
  formContainer.classList.add("hidden");
  optionsGrid.classList.remove("hidden");
  nextBtn.textContent = "NEXT";
  backBtn.classList.add("hidden");
  nextBtn.classList.remove("bg-green-600", "hover:bg-green-700");
  nextBtn.classList.add("bg-blue-600", "hover:bg-blue-700");
  currentStep = 1; // Update step back to selection
  showToast("You are back to stage selection.");
}

// Function to show toast messages
function showToast(message, type = "success") {
  toast.textContent = message;
  toast.classList.remove("hidden");
  if (type === "error") {
    toast.style.backgroundColor = "#ef4444"; // bg-red-500
  } else {
    toast.style.backgroundColor = "#22c55e"; // bg-green-500
  }
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2000);
}