document.addEventListener('DOMContentLoaded', function() {
    // Select all FAQ items
    const faqItems = document.querySelectorAll('.accordion-item');

    // Loop through each FAQ item and add a click event listener to the question
    faqItems.forEach(item => {
        item.querySelector('.accordion-header').addEventListener('click', function() {
            // Toggle the 'open' class on the FAQ item when clicked
            item.classList.toggle('open');
        });
    });
});
