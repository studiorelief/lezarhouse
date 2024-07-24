import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const preventScrollClasses = ['c--slider_modal', 'form_component', 'fs_accordion-legals_item'];

function addLenisPrevent() {
  preventScrollClasses.forEach((className) => {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element) => {
      element.setAttribute('data-lenis-prevent', 'true');
    });
  });
}
export function lenisScroll() {
  addLenisPrevent();
  const wrapperElement = document.querySelector('.main-content-wrapper');

  if (wrapperElement == null) {
    throw new Error("Element with class '.main-content-wrapper' not found");
  }

  const lenis = new Lenis({
    wrapper: wrapperElement as HTMLElement,
    content: wrapperElement as HTMLElement,
    lerp: 0.2,
    wheelMultiplier: 0.7,
    gestureOrientation: 'vertical',
  });

  /* lenis.on('scroll', (e) => {
    console.log(e);
  }); */

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
