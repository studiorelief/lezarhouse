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
    rotationZ: -360,
    duration: 10,
    repeat: -1,
    ease: 'linear',
  });
gsap.to('.studio-services_image-w.is-2', {
    rotationZ: -360,
    duration: 5,
    repeat: -1,
    ease: 'linear',
  });
  gsap.to('.studio-services_image-w.is-4', {
    rotationZ: 360,
    duration: 10,
    repeat: -1,
    ease: 'linear',
  });
  gsap.to('.studio-services_image-w.is-6', {
    rotationZ: 360,
    duration: 5,
    repeat: -1,
    ease: 'linear',
  }); 
}
