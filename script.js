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
const listItems = document.querySelectorAll("ul li");
const panelImage = document.getElementById("panel-image");
const panelDescription = document.getElementById("panel-description");

listItems.forEach(item => {
    item.addEventListener("click", () => {
        const imgSrc = item.getAttribute("data-img");
        const description = item.getAttribute("data-desc");

        panelImage.src = imgSrc;
        panelDescription.textContent = description;
    });
});
document.getElementById('toggle-panel').addEventListener('click', function () {
    const panel = document.getElementById('photo-panel');
    const button = this;

    if (panel.style.display === 'none' || panel.style.display === '') {
        panel.style.display = 'block';
        button.textContent = 'Скрыть фотографии';
    } else {
        panel.style.display = 'none';
        button.textContent = 'Показать фотографии';
    }
});

