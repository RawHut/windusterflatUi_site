const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
});
