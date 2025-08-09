import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import "/src/sass/style.scss";

try {
    const swiper = new Swiper('.works__slider', {
    navigation: {
        nextEl: ".icon-right-open",
        prevEl: ".icon-left-open",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    sliderPerView: 1,
    loop: true,
    breakpoints: {
    // when window width is 
    1200: {
        slidesPerView: 3,
        spaceBetween: 5
    },
    // when window width is
    1920: {
        spaceBetween: 35
    },
    },
    
    modules: [Navigation, Pagination],
});
} catch(e) {}

