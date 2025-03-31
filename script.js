// For Primary and secondary color

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#056632",
        secondary: "#056632",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};

document.body.addEventListener(
  "wheel",
  (e) => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    return;
  },
  { passive: false }
);

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById("close-icon");

// Ensure close icon is initially hidden
closeIcon.classList.add("hidden");

// Toggle menu on button click
mobileMenuButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent click from reaching the document
  toggleMenu();
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileMenuButton.contains(event.target)
  ) {
    closeMenu();
  }
});

// Handle link clicks inside the menu
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Toggle menu function
function toggleMenu() {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.remove("animate-slide-up");
    mobileMenu.classList.add("animate-slide-down");

    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    closeMenu();
  }
}

// Close menu function
function closeMenu() {
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("animate-slide-down");
    mobileMenu.classList.add("animate-slide-up");

    setTimeout(() => {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }, 300); // Match animation duration
  }
}

// Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Here you would typically send this data to your backend
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Slogan
const textElement = document.getElementById("changingText");
const words = [
  { text: "People", className: "people" },
  { text: "Choice", className: "choice" },
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  textElement.className = currentWord.className;

  if (isDeleting) {
    textElement.textContent = currentWord.text.slice(0, charIndex--);
  } else {
    textElement.textContent = currentWord.text.slice(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.text.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }
  setTimeout(typeEffect, isDeleting ? 100 : 200);
}

typeEffect();

function sendToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const number = document.getElementById("number").value.trim();

  // Build the WhatsApp message dynamically
  let whatsappMessage = "Hi, I'd like to inquire about your services.";

  if (name) {
    whatsappMessage += `%0A%0AName: ${name}`;
  }
  if (number) {
    whatsappMessage += `%0APhone Number: ${number}`;
  }
  if (email) {
    whatsappMessage += `%0AEmail: ${email}`;
  }
  if (message) {
    whatsappMessage += `%0AMessage: ${message}`;
  }

  // Only send if at least one field is filled
  if (name || email || message) {
    const phoneNumber = "+919712644406"; // Replace with your WhatsApp number
    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  }
}

//  Yeras
document.getElementById("year").textContent = new Date().getFullYear();

// gst
// services card
// JavaScript for mobile expand/collapse behavior (only one card open at a time)
document.querySelectorAll(".accordion-header").forEach(function (header) {
  header.addEventListener("click", function () {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains("active");

    // Check if the window width is less than or equal to 767px (Mobile)
    if (window.innerWidth <= 767) {
      // Close all other accordion contents
      document
        .querySelectorAll(".accordion-header")
        .forEach(function (otherHeader) {
          if (otherHeader !== header) {
            otherHeader.classList.remove("active");
            otherHeader.nextElementSibling.style.maxHeight = "0"; // Collapse other content
          }
        });

      // Toggle the clicked card
      if (!isActive) {
        header.classList.add("active");
        content.style.display = "block";
        content.style.maxHeight = "500px"; // Adjust this max-height based on content size
      } else {
        header.classList.remove("active");
        content.style.maxHeight = "0"; // Collapse the clicked content
        content.style.display = "none"; // Hide content when collapsed
      }
    }
  });
});

//  income tax end

// Accounting strat

function toggleContent(id) {
  const content = document.getElementById(id);
  content.classList.toggle("active");
}

function toggleContent(service) {
  const screenWidth = window.innerWidth;
  const contentToToggle = document.getElementById(service);
  const allContents = document.querySelectorAll(".collapsible-content");

  if (screenWidth <= 768) {
    allContents.forEach((content) => {
      if (content !== contentToToggle) {
        content.style.maxHeight = "0";
        content.style.display = "none";
      }
    });

    // Toggle the clicked section
    if (contentToToggle.style.display === "block") {
      contentToToggle.style.maxHeight = "0";
      contentToToggle.style.display = "none";
    } else {
      contentToToggle.style.display = "block";
      contentToToggle.style.maxHeight = contentToToggle.scrollHeight + "px";
    }
  }
}

// Expand all sections on larger screens
window.addEventListener("load", function () {
  if (window.innerWidth > 768) {
    document.querySelectorAll(".collapsible-content").forEach((content) => {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.display = "block";
    });
  }
});

// Accounting end
