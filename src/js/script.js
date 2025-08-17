import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
    document.body.style.overflow = "";
});

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

try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "flex";
        });
    });

    contents.forEach((c,i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}

try {
    const validator = new JustValidate('form');

    validator.addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Please fill the name'
    },
    {
      rule: 'minLength',
      value: 2,
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
    }
  ])
  .addField('#question', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 5
    }
  ], {
    errorsContainer: document.querySelector('#question')
    .parentElement.querySelector(".error-message")
  })
  .addField('#checkbox', [
    {
      rule: 'required',
    },
  ], {
    errorsContainer: document.querySelector('#checkbox')
    .parentElement.parentElement.querySelector(".checkbox-error-message")
  })
  .onSuccess(( event ) => {
    const form = event.currentTarget;
    const formData = new FormData(form);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: formData,
    }).then(res => res.json()).then(data => {
      console.log("Success", data);
      form.reset();
    })
  });
} catch(e){}

try {
    const val2 = document.querySelector('.footer__newsletter').lastElementChild;
    const validator2 = new JustValidate(val2);

    validator2.addField('#email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
    }
  ],  {
    errorsContainer: val2.querySelector('#email')
    .parentElement.querySelector(".error-message")
  })
  .addField('#checkbox', [
    {
      rule: 'required',
    },
  ], {
    errorsContainer: val2.querySelector('#checkbox')
    .parentElement.parentElement.querySelector(".checkbox-error-message")
  })
  .onSuccess(( event ) => {
    const form = event.currentTarget;
    const formData = new FormData(form);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: formData,
    }).then(res => res.json()).then(data => {
      console.log("Success", data);
      form.reset();
    })
  });
} catch(e){}