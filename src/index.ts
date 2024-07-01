import './index.css';

import { cmsPlaylist } from '$utils/autoplaylist';
import { autoTabs } from '$utils/autotabs';
import { darkModeContent } from '$utils/darkmode';
import {
  ecosystemRotate,
  loopArtists,
  loopArtStudio,
  loopBaseline,
  pulseAnimation,
  studioHeroParallax,
} from '$utils/gsap';
import { toggleSize } from '$utils/navbar';
import { loadScript } from '$utils/scripts';
import { swiperLab, swiperProject, swiperSlide, swiperTestimonials } from '$utils/swiper';
import { /* cmsPlaylist, */ cmsPopup, svgCms } from '$utils/tricks';

window.Webflow ||= [];
window.Webflow.push(() => {
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
  ]);

  darkModeContent();
  toggleSize();

  swiperSlide();
  swiperLab();
  swiperProject();
  swiperTestimonials();

  svgCms();

  loopArtStudio();

  if (window.location.pathname === '/') {
    studioHeroParallax();
  }

  if (window.location.href.includes('/let-art-be')) {
    loopArtists();
    cmsPlaylist();
    pulseAnimation();
  }

  if (window.location.href.includes('/ecosystem')) {
    ecosystemRotate();
  }

  if (document.querySelector('.a--c--slider-open-modal')) {
    cmsPopup();
  }

  loopBaseline();

  autoTabs();
});
