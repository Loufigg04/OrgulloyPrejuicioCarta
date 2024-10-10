const page = document.querySelector('.page');
const container = document.querySelector('.container');
let isOpen = false;

page.addEventListener('click', function() {
    if (isOpen) {
        page.classList.remove('open');
        container.style.opacity = '0';
        setTimeout(() => {
            container.style.visibility = 'hidden';
        }, 8000); // Esperar a que la transición de opacidad termine
    } else {
        page.classList.add('open');
        container.style.visibility = 'visible';
        container.style.opacity = '1';
    }
    isOpen = !isOpen;
});