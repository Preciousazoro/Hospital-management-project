const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
    updateDots();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < dots.length - 1) ? currentIndex + 1 : 0;
    updateDots();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateDots();
    });
});

updateDots();
