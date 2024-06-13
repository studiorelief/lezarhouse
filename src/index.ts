import './index.css';

import { autoTabs } from '$utils/autotabs';
import { darkModeContent } from '$utils/darkmode';
import { loopArtists, loopArtStudio, loopBaseline, studioHeroParallax } from '$utils/gsap';
import { toggleSize } from '$utils/navbar';
import { loadScript } from '$utils/scripts';
import { swiperLab, swiperProject, swiperSlide, swiperTestimonials } from '$utils/swiper';
import { /* cmsPlaylist, */ cmsPopup, svgCms } from '$utils/tricks';
import { cmsPlaylist } from '$utils/autoplaylist';

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

   loopArtStudio();

  if (window.location.pathname === '/') {
    studioHeroParallax();
  }

  if (window.location.href.includes('/let-art-be')) {
    loopArtists();
    cmsPlaylist();
  }

  if (document.querySelector('.a--c--slider-open-modal')) {
    cmsPopup();
  }

  loopBaseline();

  autoTabs();

});
