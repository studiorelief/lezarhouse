import './index.css';

import { applyHoverEffect } from '$utils/3Dcards';
import { cmsPlaylist } from '$utils/autoplaylist';
import { autoTabs } from '$utils/autotabs';
import { darkModeContent } from '$utils/darkmode';
import {
  angelsAnimationScroll,
  countHeadingKpi,
  createAngelsCardsParallax,
  ecosystemRotate,
  houseParallax,
  loopArtists,
  loopArtStudio,
  loopBaseline,
  loopHomeNav,
  pulseAnimation,
  sponsorParallax,
  sponsorshipCardsParallax,
  studioHeroParallax,
  tabsParallax,
  timelineModalResidencyCollab,
  timelineModalResidencyExhib,
} from '$utils/gsap';
import { homeTextAnimation } from '$utils/homeText';
import { lenisScroll } from '$utils/lenisScroll';
import { loadModelViewerScript } from '$utils/loadModalViewer';
import { toggleSize } from '$utils/navbar';
import { loadScript } from '$utils/scripts';
import {
  swiperBaseline,
  swiperLab,
  swiperProject,
  swiperSlide,
  swiperSponsorGallery,
  swiperStudioArtists,
  swiperStudioServices,
  swiperTestimonials,
} from '$utils/swiper';
import { /* cmsPlaylist, */ cmsPopup, svgCms } from '$utils/tricks';

window.Webflow ||= [];
window.Webflow.push(() => {
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-richtext@1/richtext.js'),
    setTimeout(() => {
      loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js');
    }, 1000),
  ]);

  /* 
  ! Global
  */
  lenisScroll();

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

  if (window.location.href.includes('/studio') || window.location.href.includes('/studio-v2')) {
    loadModelViewerScript();
    studioHeroParallax();
    loopArtStudio();
    loopBaseline();
    swiperBaseline();
    swiperStudioServices();
    swiperStudioArtists();
  }

  if (window.location.href.includes('/residency')) {
    timelineModalResidencyCollab();
    timelineModalResidencyExhib();
  }

  if (window.location.href.includes('/let-art-be')) {
    loopArtists();
    cmsPlaylist();
    pulseAnimation();
    autoTabs();
    if (window.innerWidth >= 1024) {
      tabsParallax();
    }
  }

  if (window.location.href.includes('/house')) {
    countHeadingKpi();
    houseParallax();
    setTimeout(() => {
      applyHoverEffect();
    }, 500);
  }

  if (window.location.href.includes('/ecosystem')) {
    ecosystemRotate();
  }

  if (window.location.href.includes('/creative-angels')) {
    angelsAnimationScroll();
    loadModelViewerScript();
    if (window.innerWidth >= 1024) {
      createAngelsCardsParallax();
    }
    setTimeout(() => {
      applyHoverEffect();
    }, 500);
  }

  if (window.location.href.includes('/sponsorship')) {
    sponsorParallax();
    swiperSponsorGallery();
    if (window.innerWidth >= 1024) {
      sponsorshipCardsParallax();
    }
  }

  if (document.querySelector('.a--c--slider-open-modal')) {
    cmsPopup();
  }

  if (window.location.href.includes('/jockiz')) {
    loadModelViewerScript();
  }
});
