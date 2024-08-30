
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


document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menubar');
    const close = document.getElementById('close');
    const navbar = document.querySelector('.navbar');

    menu.addEventListener('click', function() {
        navbar.classList.add('show');
    });

    close.addEventListener('click', function() {
        navbar.classList.remove('show');
    });
});


// all about Health Article 
// function swapLeft() {
//     const articles = document.querySelector('.articles');
//     const contentItems = Array.from(articles.children);
//     articles.appendChild(contentItems[0]);
// }

// function swapRight() {
//     const articles = document.querySelector('.articles');
//     const contentItems = Array.from(articles.children);
//     articles.insertBefore(contentItems[contentItems.length - 1], contentItems[0]);
// }


function swapLeft() {
    const sec7Container = document.querySelector('.sec7Container');
    const contentItems = Array.from(sec7Container.children);
    sec7Container.appendChild(contentItems[0]);
}

function swapRight() {
    const sec7Container = document.querySelector('.sec7Container');
    const contentItems = Array.from(sec7Container.children);
    sec7Container.insertBefore(contentItems[contentItems.length - 1], contentItems[0]);
}