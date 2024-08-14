document.addEventListener('DOMContentLoaded', function () {
  const swiperServ = new Swiper(".swiper-slider", {
    loop: true,
    spaceBetween: 17,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 1.4,
      },
      650: {
        slidesPerView: 2.4,
      },
      900: {
        slidesPerView: 3.4,
      },
      1280: {
        slidesPerView: 4.4,
      },
    },
  });
});