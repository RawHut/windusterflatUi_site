document.addEventListener('DOMContentLoaded', function() {
    // Select all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');

    // Loop through each FAQ item and add a click event listener to the question
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', function() {
            // Toggle the 'open' class on the FAQ item when clicked
            item.classList.toggle('open');
        });
    });
});
