var swiper = new Swiper(".staff-slider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  scrollbar: {
    el: ".staff-slider .swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
      slidesPerView: "auto",
    },
    601: {
      slidesPerView: 1,
      spaceBetween: 24,
      slidesPerView: "auto",
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerView: "auto",
    },
  },
  navigation: {
    nextEl: ".team-section .swiper-button-next",
    prevEl: ".team-section .swiper-button-prev",
  },
});
