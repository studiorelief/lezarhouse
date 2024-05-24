import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperSlide() {
  const allSwipers = document.querySelectorAll('.swiper.is-c--slider ');
  allSwipers.forEach((swiperContainer) => {
    const navigationContainer = swiperContainer.nextElementSibling;

    if (navigationContainer) {
      // Vérifie que navigationContainer n'est pas null
      new Swiper(swiperContainer, {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: false,
        parallax: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: navigationContainer.querySelector('.swiper-right'),
          prevEl: navigationContainer.querySelector('.swiper-left'),
        },
        slideActiveClass: 'is-active',
        speed: 800,
        effect: 'slide',
        slideEffect: {
          easeOut: 'ease-out',
        },
      });
    } else {
    }
  });
}

export function swiperProject() {
  const allSwipers = document.querySelectorAll('.swiper.is-c--project');

  allSwipers.forEach((swiperContainer) => {
    const paginationContainer = swiperContainer.nextElementSibling;

    if (paginationContainer && paginationContainer.classList.contains('swiper-pagination-custom')) {
      new Swiper(swiperContainer, {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: false,
        mousewheel: {
          forceToAxis: true,
        },
        pagination: {
          el: paginationContainer,
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-custom-active',
        },
        slideActiveClass: 'is-active',
        speed: 400,
        effect: 'slide',
        slideEffect: {
          easeOut: 'ease-out',
        },
      });
    }
  });
}

export function swiperLab() {
  const swiperContainers = document.querySelectorAll('.swiper.is-studio-lab');

  swiperContainers.forEach((container) => {
    new Swiper(container, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 40,
      autoplay: {
        delay: 0,
      },
      speed: 2000,
    });
  });
}

export function swiperTestimonials() {
  const swiperContainers = document.querySelectorAll('.swiper.is-c--artists-testomials');

  swiperContainers.forEach((container) => {
    new Swiper(container, {
      loop: false,
      slidesPerView: '1',
      spaceBetween: 40,
      speed: 400,
      centeredSlides: false,
      mousewheel: {
        forceToAxis: true,
        eventsTarget: '.swiper-mousewheel',
      },
      navigation: {
        nextEl: '.swiper-right.is-c--artists-testomials',
        prevEl: '.swiper-left.is-c--artists-testomials',
      },
    });
  });
}
