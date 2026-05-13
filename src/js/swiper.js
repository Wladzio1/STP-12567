const swiper = new Swiper('.gallery-swiper-main', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
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
  breakpoints: {
    1440: {
      coverflowEffect: {
        stretch: 50,
      },
    },
  },
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
});
