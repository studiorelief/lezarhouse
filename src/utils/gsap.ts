import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function studioHeroParallax() {
  gsap.to('.studio-hero_heading', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_studio-hero',
      start: '30% 50%',
      end: '120% 50%',
      scrub: true,
      scroller: '.main-content-wrapper',
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
    duration: 10,
    repeat: -1,
    ease: 'linear',
  });
  gsap.to('.studio-services_image-w.is-3', {
    rotationZ: 360,
    duration: 9,
    repeat: -1,
    ease: 'linear',
  });
  gsap.to('.studio-services_image-w.is-4', {
    rotationZ: 360,
    duration: 8,
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
