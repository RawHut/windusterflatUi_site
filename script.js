// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Animate fade-ins on scroll
const fadeInElements = document.querySelectorAll(".fade-in, .fade-in-box");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  observer.observe(el);
});

// Optional: FAQ expand/collapse (for future expansion if needed)
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
