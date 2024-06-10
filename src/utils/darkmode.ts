/**
 * Dark Mode Toggle 1.0.2
 * Copyright 2023 Timothy Ricks
 * Released under the MIT License
 * Released on: November 28, 2023
 */
import gsap from 'gsap';

export function setDarkMode() {
  function colorModeToggle() {
    function attr<T>(defaultVal: T, attrVal: string | null): T {
      const defaultValType = typeof defaultVal;
      if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal;
      if (attrVal === 'true' && defaultValType === 'boolean') return true as T;
      if (attrVal === 'false' && defaultValType === 'boolean') return false as T;
      if (isNaN(Number(attrVal)) && defaultValType === 'string') return attrVal as T;
      if (!isNaN(Number(attrVal)) && defaultValType === 'number') return +attrVal as T;
      return defaultVal;
    }

    const htmlElement = document.documentElement;
    const computed = getComputedStyle(htmlElement);
    let toggleEl: NodeListOf<Element> | undefined;
    let togglePressed = 'false';

    const scriptTag = document.querySelector('[tr-color-vars]') as HTMLScriptElement | null;
    if (!scriptTag) {
      console.warn('Script tag with tr-color-vars attribute not found');
      return;
    }

    let colorModeDuration = attr(0.5, scriptTag.getAttribute('duration'));
    let colorModeEase = attr('power1.out', scriptTag.getAttribute('ease'));

    const cssVariables = scriptTag.getAttribute('tr-color-vars');
    if (!cssVariables || !cssVariables.length) {
      console.warn('Value of tr-color-vars attribute not found');
      return;
    }

    let lightColors: Record<string, string> = {};
    let darkColors: Record<string, string> = {};
    cssVariables.split(',').forEach(function (item) {
      let lightValue = computed.getPropertyValue(`--color--${item}`).trim();
      let darkValue = computed.getPropertyValue(`--dark--${item}`).trim();
      if (lightValue.length) {
        if (!darkValue.length) darkValue = lightValue;
        lightColors[`--color--${item}`] = lightValue;
        darkColors[`--dark--${item}`] = darkValue;
      }
    });

    if (!Object.keys(lightColors).length) {
      console.warn('No variables found matching tr-color-vars attribute value');
      return;
    }

    function setColors(colorObject: Record<string, string>, animate: boolean) {
      if (typeof gsap !== 'undefined' && animate) {
        gsap.to(htmlElement, {
          ...colorObject,
          duration: colorModeDuration,
          ease: colorModeEase,
        });
      } else {
        Object.keys(colorObject).forEach(function (key) {
          htmlElement.style.setProperty(key, colorObject[key]);
        });
      }
    }

    function goDark(dark: boolean, animate: boolean) {
      if (dark) {
        localStorage.setItem('dark-mode', 'true');
        htmlElement.classList.add('dark-mode');
        setColors(darkColors, animate);
        togglePressed = 'true';
      } else {
        localStorage.setItem('dark-mode', 'false');
        htmlElement.classList.remove('dark-mode');
        setColors(lightColors, animate);
        togglePressed = 'false';
      }
      if (typeof toggleEl !== 'undefined') {
        toggleEl.forEach(function (element) {
          element.setAttribute('aria-pressed', togglePressed);
        });
      }
    }

    function checkPreference(e: MediaQueryListEvent) {
      goDark(e.matches, false);
    }
    const colorPreference = window.matchMedia('(prefers-color-scheme: dark)');
    colorPreference.addEventListener('change', (e) => {
      checkPreference(e);
    });

    let storagePreference = localStorage.getItem('dark-mode');
    if (storagePreference !== null) {
      storagePreference === 'true' ? goDark(true, false) : goDark(false, false);
    } else {
      checkPreference(colorPreference);
    }

    window.addEventListener('DOMContentLoaded', (event) => {
      toggleEl = document.querySelectorAll('[tr-color-toggle]');
      toggleEl.forEach(function (element) {
        element.setAttribute('aria-label', 'View Dark Mode');
        element.setAttribute('role', 'button');
        element.setAttribute('aria-pressed', togglePressed);
      });
      toggleEl.forEach(function (element) {
        element.addEventListener('click', function () {
          let darkClass = htmlElement.classList.contains('dark-mode');
          darkClass ? goDark(false, true) : goDark(true, true);
        });
      });
    });
  }

  colorModeToggle();
}

/*
! SR Code 
*/

export function darkModeContent() {
  document.documentElement.addEventListener('classChange', () => {
    const isDarkMode =
      document.documentElement.classList.contains('w-mod-js') &&
      document.documentElement.classList.contains('dark-mode');
    document.querySelectorAll('.navbar_text.is-darkmode').forEach((el) => {
      el.textContent = isDarkMode ? 'Light mode' : 'Dark mode';
    });
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const event = new CustomEvent('classChange');
        document.documentElement.dispatchEvent(event);
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true });
}
