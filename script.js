document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');

            item.classList.toggle('active');
        });
    });
});
