import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        728: {
            slidesPerView: 7,
        },
        360: {
            slidesPerView: 4,
        },
        320: {
            slidesPerView: 4,
        },
        100: {
            slidesPerView: 1,
        }
    }
});

let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 100,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});