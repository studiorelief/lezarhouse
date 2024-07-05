import './index.css';

import { cmsPlaylist } from '$utils/autoplaylist';
import { autoTabs } from '$utils/autotabs';
import { darkModeContent } from '$utils/darkmode';
import {
  angelsAnimationScroll,
  createAngelsCardsParallax,
  ecosystemRotate,
  loopArtists,
  loopArtStudio,
  loopBaseline,
  loopHomeNav,
  pulseAnimation,
  sponsorParallax,
  sponsorshipCardsParallax,
  studioHeroParallax,
} from '$utils/gsap';
import { homeTextAnimation } from '$utils/homeText';
import { loadModelViewerScript } from '$utils/loadModalViewer';
import { toggleSize } from '$utils/navbar';
import { loadScript } from '$utils/scripts';
import { swiperLab, swiperProject, swiperSlide, swiperTestimonials } from '$utils/swiper';
import { /* cmsPlaylist, */ cmsPopup, svgCms } from '$utils/tricks';

window.Webflow ||= [];
window.Webflow.push(() => {
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js'),
    setTimeout(() => {
      loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js');
    }, 1000),
  ]);

  /*
  ! Navbar
  */
  darkModeContent();
  toggleSize();

  /*
  ! Swiper
  */
  swiperSlide();
  swiperLab();
  swiperProject();
  swiperTestimonials();
  svgCms();

  if (window.location.pathname === '/') {
    homeTextAnimation();
    loopHomeNav();
  }

  if (window.location.href.includes('/studio')) {
    studioHeroParallax();
    loopArtStudio();
    loopBaseline();
  }

  if (window.location.href.includes('/let-art-be')) {
    loopArtists();
    cmsPlaylist();
    pulseAnimation();
    autoTabs();
  }

  if (window.location.href.includes('/ecosystem')) {
    ecosystemRotate();
  }

  if (window.location.href.includes('/sponsorship')) {
    sponsorParallax();
    sponsorshipCardsParallax();
  }

  if (window.location.href.includes('/creative-angels')) {
    angelsAnimationScroll();
    loadModelViewerScript();
    createAngelsCardsParallax();
  }

  if (document.querySelector('.a--c--slider-open-modal')) {
    cmsPopup();
  }
});
