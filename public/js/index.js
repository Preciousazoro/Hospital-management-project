

    var swiper = new Swiper('.mySwiper', {
        spaceBetween: 20,
        slidesPerView: 3,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });


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