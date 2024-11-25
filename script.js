document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');

            item.classList.toggle('active');

            // Animate the accordion body
            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + 'px';
                body.style.transition = 'max-height 0.5s ease-in-out';
            } else {
                body.style.maxHeight = '0';
                body.style.transition = 'max-height 0.5s ease-in-out';
            }
        });
    });
});
