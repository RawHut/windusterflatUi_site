// Add animation when the FAQ items come into the viewport
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Add class to elements when they enter the viewport
    function handleScroll() {
        faqItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('slide-in');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check for visible items
});
