const swiper = new Swiper('.gallery-swiper-main', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto', // Zostawiamy auto, ale CSS musi być mniejszy
  initialSlide: 2, // Zaczynamy od środkowego (trzeciego) zdjęcia
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 220, // ZWIĘKSZ TO (np. z 80 na 120). Im więcej, tym ciasniej będą slajdy.
    depth: 130, // Odpowiada za skalę bocznych slajdów.
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    1440: {
      coverflowEffect: {
        stretch: 120, // Większy ścisk na desktopie
      },
    },
  },
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
});
