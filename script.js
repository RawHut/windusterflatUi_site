document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');
            const isActive = item.classList.contains('active');

            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
                const bodyToClose = i.querySelector('.accordion-body');
                bodyToClose.style.maxHeight = null;
            });

            // If the clicked item was not active, open it
            if (!isActive) {
                item.classList.add('active');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });
});
