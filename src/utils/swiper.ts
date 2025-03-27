import 'swiper/css/bundle';

import { gsap } from 'gsap';
// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperSlide() {
  const allSwipers = document.querySelectorAll('.swiper.is-c--slider');
  allSwipers.forEach((swiperContainer) => {
    const navigationContainer = swiperContainer.nextElementSibling;

    if (navigationContainer) {
      new Swiper(swiperContainer as HTMLElement, {
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
          nextEl: navigationContainer.querySelector('.swiper-right') as HTMLElement,
          prevEl: navigationContainer.querySelector('.swiper-left') as HTMLElement,
        },
        slideActiveClass: 'is-active',
        speed: 800,
        effect: 'slide',
        slideEffect: {
          easeOut: 'ease-out',
        },
        on: {
          reachEnd: function () {
            const lastSlide = swiperContainer.querySelector(
              '.swiper-slide:nth-last-child(2) .is-parallax .c--slider_background-image'
            ) as HTMLElement;
            const lastSlideParallax = swiperContainer.querySelector(
              '.swiper-slide:last-child .is-parallax .c--slider_background-image'
            ) as HTMLElement;
            if (lastSlide) {
              lastSlide.style.transform = 'translateX(0rem)';
            }
            if (lastSlideParallax) {
              lastSlideParallax.style.transform = 'translateX(0rem)';
            }
          },
          fromEdge: function () {
            const resetSlides = swiperContainer.querySelectorAll(
              '.swiper-slide .is-parallax .c--slider_background-image'
            ) as NodeListOf<HTMLElement>;
            resetSlides.forEach((slide) => {
              slide.style.transform = '';
            });
          },
        },
      });
    }
  });
}

export function swiperProject() {
  const allSwipers = document.querySelectorAll('.swiper.is-c--project');

  allSwipers.forEach((swiperContainer) => {
    const paginationContainer = swiperContainer.nextElementSibling;

    if (paginationContainer && paginationContainer.classList.contains('swiper-pagination-custom')) {
      const isReverse = swiperContainer.classList.contains('is-reverse');

      const swiperInstance = new Swiper(swiperContainer, {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: false,
        parallax: true,
        mousewheel: {
          forceToAxis: true,
        },
        pagination: {
          el: paginationContainer,
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-custom-active',
        },
        autoplay: {
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: isReverse,
        },
        slideActiveClass: 'is-active',
        speed: 800,
        effect: 'slide',
        slideEffect: {
          easeOut: 'ease-out',
        },
      });

      swiperInstance.on('slideChange', function () {
        const container = swiperInstance.el;

        if (container.classList.contains('is-reverse')) {
          swiperInstance.params.autoplay.reverseDirection = true;
        } else {
          swiperInstance.params.autoplay.reverseDirection = false;
        }
        // Restart autoplay to apply the change immediately
        swiperInstance.autoplay.stop();
        swiperInstance.autoplay.start();
      });

      // Ensure autoplay restarts correctly after pagination click
      swiperInstance.on('paginationUpdate', function () {
        swiperInstance.autoplay.stop();
        swiperInstance.autoplay.start();
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
      speed: 800,
      centeredSlides: false,
      mousewheel: {
        forceToAxis: true,
        eventsTarget: '.swiper-mousewheel',
      },
      navigation: {
        nextEl: '.swiper-right.is-c--artists-testomials',
        prevEl: '.swiper-left.is-c--artists-testomials',
      },
      effect: 'fade',
    });
  });
}

export function swiperSponsorGallery() {
  const swiperContainers = document.querySelectorAll('.swiper.is-sponsorship-gallery');

  swiperContainers.forEach((container) => {
    new Swiper(container, {
      loop: true,
      slidesPerView: '4',
      spaceBetween: 40,
      speed: 800,
      centeredSlides: false,
      mousewheel: {
        forceToAxis: true,
      },
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    });
  });
}

/*  Studio V2 */

export function swiperBaseline() {
  const swiperContainers = document.querySelectorAll('.swiper.is-studio-baselines');

  swiperContainers.forEach((container) => {
    new Swiper(container, {
      loop: true,
      direction: 'vertical',
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        reverseDirection: true,
      },
      speed: 500,
      // delay: 500,
      effect: 'fade',

      on: {
        beforeTransition: function (this: Swiper) {
          const allSlides = this.slides;
          allSlides.forEach((slide: Element) => {
            const richText = slide.querySelector('.banner_baseline_rich-text');
            if (richText) {
              gsap.set(richText, { opacity: 0, y: 40 });
            }
          });
        },
        slideChange: function (this: Swiper) {
          setTimeout(() => {
            const currentSlide = this.slides[this.activeIndex];
            const richText = currentSlide.querySelector('.banner_baseline_rich-text');
            if (richText) {
              gsap.fromTo(
                richText,

                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
              );
            }
          }, 50);
        },
        loopFix: function (this: Swiper) {
          const allSlides = this.slides;
          allSlides.forEach((slide: Element) => {
            const richText = slide.querySelector('.banner_baseline_rich-text');
            if (richText) {
              gsap.set(richText, { opacity: 0, y: 40 });
            }
          });
        },
      },
    });
  });
}

export function swiperStudioServices() {
  const allSwipers = document.querySelectorAll('.swiper.is-studio-services');
  allSwipers.forEach((swiperContainer) => {
    const navigationContainer = swiperContainer.nextElementSibling;

    if (navigationContainer) {
      new Swiper(swiperContainer as HTMLElement, {
        direction: 'horizontal',
        loop: false,
        breakpoints: {
          320: {
            slidesPerView: 1.25,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
        spaceBetween: 40,
        centeredSlides: false,
        parallax: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: navigationContainer.querySelector('.swiper-right') as HTMLElement,
          prevEl: navigationContainer.querySelector('.swiper-left') as HTMLElement,
        },
        slideActiveClass: 'is-active',
        speed: 800,
        effect: 'slide',
        slideEffect: {
          easeOut: 'ease-out',
        },
        on: {
          reachEnd: function () {
            const lastSlide = swiperContainer.querySelector(
              '.swiper-slide:nth-last-child(2) .is-parallax .c--slider_background-image'
            ) as HTMLElement;
            const lastSlideParallax = swiperContainer.querySelector(
              '.swiper-slide:last-child .is-parallax .c--slider_background-image'
            ) as HTMLElement;
            if (lastSlide) {
              lastSlide.style.transform = 'translateX(0rem)';
            }
            if (lastSlideParallax) {
              lastSlideParallax.style.transform = 'translateX(0rem)';
            }
          },
          fromEdge: function () {
            const resetSlides = swiperContainer.querySelectorAll(
              '.swiper-slide .is-parallax .c--slider_background-image'
            ) as NodeListOf<HTMLElement>;
            resetSlides.forEach((slide) => {
              slide.style.transform = '';
            });
          },
        },
      });
    }
  });
}

export function swiperStudioArtists() {
  const allSwipers = document.querySelectorAll('.swiper.is-studio-artists');
  allSwipers.forEach((swiperContainer) => {
    const navigationContainer = swiperContainer.nextElementSibling;

    if (navigationContainer) {
      new Swiper(swiperContainer as HTMLElement, {
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
          nextEl: navigationContainer.querySelector('.swiper-right') as HTMLElement,
          prevEl: navigationContainer.querySelector('.swiper-left') as HTMLElement,
        },
        speed: 800,
        effect: 'slide',
        slideEffect: {
          easeOut: 'ease-out',
        },
      });
    }
  });
}
