import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function studioHeroParallax() {
  gsap.to('.studio-hero_heading', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_studio-hero',
      scroller: '.main-content-wrapper',
      start: '30% 50%',
      end: '120% 50%',
      scrub: true,
    },
    y: '30rem',
  });
}

export function loopBaseline() {
  gsap.set('.studio-hero_baseline-wrapper', { x: 0 });

  gsap.to('.studio-hero_baseline', {
    xPercent: -100,
    duration: 20,
    repeat: -1,
    yoyo: false,
    ease: 'linear',
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0),
    },
  });
}

export function loopArtists() {
  gsap.set('.lab-tool_loop-wrapper', { x: 0 });

  gsap.to('.lab-tool_loop', {
    xPercent: -100,
    duration: 20,
    repeat: -1,
    yoyo: false,
    ease: 'linear',
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0),
    },
  });
}

export function loopArtStudio() {
  gsap.to('.studio-services_image-w.is-1', {
    rotationZ: 360,
    duration: 20,
    repeat: -1,
    ease: 'linear',
  });
  gsap.to('.studio-services_image-w.is-3', {
    rotationZ: 360,
    duration: 18,
    repeat: -1,
    ease: 'linear',
  });
  gsap.to('.studio-services_image-w.is-4', {
    rotationZ: 360,
    duration: 16,
    repeat: -1,
    ease: 'linear',
  });
  /* gsap.to('.studio-services_image-w.is-5', {
    rotationZ: 360,
    duration: 10,
    repeat: -1,
    ease: 'linear',
  }); */
}

export function pulseAnimation() {
  gsap.to('#pulse-dot', {
    scale: 1.5,
    duration: 1.5,
    transformOrigin: 'center',
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
  });
}

export function ecosystemRotate() {
  gsap.to('.ecosystem-hero_stamp', {
    rotation: 360,
    repeat: -1,
    duration: 30,
    ease: 'linear',
  });
}

/* 
! Page Sponsporship
*/

export function sponsorParallax() {
  gsap.to(['.sponsorship-hero_background-image', '#is-sponsor-parallax-main'], {
    scrollTrigger: {
      markers: false,
      trigger: '.section_sponsorship-parallax',
      scroller: '.main-content-wrapper',
      start: '25% 50%',
      end: '120% 50%',
      scrub: true,
    },
    y: '7rem',
  });

  const SponsorSections = document.querySelectorAll('.section_sponsorship-layout');

  SponsorSections.forEach((section) => {
    const parallaxElement = section.querySelector('#is-sponsor-parallax-sec');
    if (parallaxElement) {
      gsap.to(parallaxElement, {
        scrollTrigger: {
          markers: false,
          trigger: section,
          scroller: '.main-content-wrapper',
          start: '0% 100%',
          end: '100% 0%',
          scrub: true,
        },
        y: '5rem',
      });
    }
  });
}

export function sponsorshipCardsParallax() {
  const sections = document.querySelectorAll('.section_sponsorship-layout');

  sections.forEach((section) => {
    const cardsWrapper = section.querySelector<HTMLElement>('.sponsorship-layout_cards-wrapper');
    const cards = section.querySelector<HTMLElement>('.sponsorship-layout_cards');

    if (cardsWrapper && cards) {
      gsap.to(cards, {
        scrollTrigger: {
          markers: false,
          trigger: cardsWrapper,
          scroller: '.main-content-wrapper',
          start: '0% 95%',
          end: '95% 0%',
          scrub: true,
        },
        y: cardsWrapper.offsetHeight - cards.offsetHeight,
      });
    }
  });
}

export function loopHomeNav() {
  gsap.set('.home-hero_page-loop-wrapper', { x: 0 });

  gsap.to('.home-hero_page-loop', {
    xPercent: -100,
    duration: 20,
    repeat: -1,
    yoyo: false,
    ease: 'linear',
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0),
    },
  });
}
