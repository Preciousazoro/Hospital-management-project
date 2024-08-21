
// const dots = document.querySelectorAll('.dot');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const reviews = document.querySelector('.reviews');
// const reviewCards = document.querySelectorAll('.review-card');
// let currentIndex = 0;

// function updateDots() {
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentIndex);
//     });
// }

// function updateReviewPosition() {
//     const offset = -currentIndex * 100; // Calculate the offset based on current index
//     reviews.style.transform = `translateX(${offset}%)`; // Move the container
// }

// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex > ``) ? currentIndex - 1 : reviewCards.length - 1;
//     updateReviewPosition();
//     updateDots();
// });

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex < reviewCards.length - 1) ? currentIndex + 1 : 0;
//     updateReviewPosition();
//     updateDots();
// });

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentIndex = index;
//         updateReviewPosition();
//         updateDots();
//     });
// });

// updateDots();
