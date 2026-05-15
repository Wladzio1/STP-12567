const swiper = new Swiper('[data-gallery-swiper-main]', {
  effect: 'coverflow',
  centeredSlides: true,
  initialSlide: 2,
  loop: true,
  autoHeight: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  slidesPerView: 'auto',
  breakpoints: {
    1440: {
      coverflowEffect: {
        stretch: 50,
      },
    },
  },
  navigation: {
    nextEl: '[data-swiper-next]',
    prevEl: '[data-swiper-prev]',
  },
});
