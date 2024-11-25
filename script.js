// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjust for navbar height
      behavior: 'smooth'
    });
  });
});

// Scroll animations for sections
const animatedElements = document.querySelectorAll('.fade-in');

function checkInView() {
  const windowHeight = window.innerHeight;
  const scrollTop = window.scrollY;

  animatedElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top + scrollTop;
    if (elementTop < scrollTop + windowHeight - 100) {
      element.classList.add('in-view');
    }
  });
}

// Initial check on page load
checkInView();

// Check as the user scrolls
window.addEventListener('scroll', checkInView);

// Add animation on button hover
document.querySelectorAll('.hero button').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.2s ease-in-out';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});
