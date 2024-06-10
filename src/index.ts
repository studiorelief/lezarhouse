import './index.css';

import { autoTabs } from '$utils/autotabs';
import { darkModeContent } from '$utils/darkmode';
import { loopArtists, loopBaseline, studioHeroParallax } from '$utils/gsap';
import { toggleSize } from '$utils/navbar';
import { loadScript } from '$utils/scripts';
import { swiperLab, swiperProject, swiperSlide, swiperTestimonials } from '$utils/swiper';
import { cmsPlaylist, cmsPopup, svgCms } from '$utils/tricks';

window.Webflow ||= [];
window.Webflow.push(() => {
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
  ]);

  darkModeContent();
  toggleSize();

  swiperSlide();
  swiperLab();
  swiperProject();
  swiperTestimonials();

  svgCms();

  if (window.location.pathname === '/') {
    studioHeroParallax();
  }

  if (window.location.href.includes('/let-art-be')) {
    cmsPlaylist();
    loopArtists();
  }

  if (document.querySelector('.a--c--slider-open-modal')) {
    cmsPopup();
  }

  loopBaseline();

  autoTabs();
});
