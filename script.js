const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#navLinks");
const year = document.querySelector("#year");
const whatsappNumber = "60164260066";

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");

    if (href === "#" || href.length < 2) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("#whatsappFloat, #whatsappInline").forEach((link) => {
  link.href = `https://wa.me/${whatsappNumber}`;
});

// Hero slideshow: automatic fade transition every 5 seconds
const heroSlides = document.querySelectorAll(".hero-slide");

if (heroSlides.length > 1) {
  let activeSlide = 0;

  setInterval(() => {
    heroSlides[activeSlide].classList.remove("is-active");
    activeSlide = (activeSlide + 1) % heroSlides.length;
    heroSlides[activeSlide].classList.add("is-active");
  }, 5000);
}
