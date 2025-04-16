document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const bar = document.getElementById("bar");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      bar.classList.toggle("fa-xmark");
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

// Gallery Filters
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Set active class
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Filter items
    const category = button.textContent.toLowerCase();

    galleryItems.forEach((item) => {
      if (category === "all") {
        item.style.display = "block";
      } else {
        const itemCategory = item.dataset.category;
        if (itemCategory === category.replace(" ", "-")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

// Modal Functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
    const imgSrc = item.querySelector("img").src;
    modalImg.src = imgSrc;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
