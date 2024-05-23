import { gsap } from 'gsap';

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
