window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
});
