import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 37,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
});

let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});