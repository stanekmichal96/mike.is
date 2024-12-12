document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    scrollToTopButton.style.display = 'block'; // Always show the button

    scrollToTopButton.addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    });
});