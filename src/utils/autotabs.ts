export function autoTabs(): void {
  // Fix for Safari
  if (navigator.userAgent.includes('Safari')) {
    document.querySelectorAll('.lab-scene_tabs-link').forEach((tabElement) => {
      const tabButton = tabElement as HTMLElement;
      const originalFocus = tabButton.focus;
      tabButton.focus = function (options?: FocusOptions) {
        const x = window.scrollX;
        const y = window.scrollY;
        const f = () => {
          setTimeout(() => window.scrollTo(x, y), 1);
          tabButton.removeEventListener('focus', f);
        };
        tabButton.addEventListener('focus', f);
        originalFocus.call(this, options);
      };
    });
  }

  // Start Tabs
  let tabTimeout: number | undefined;
  let previousTab: HTMLElement | null = null;

  const resetLoader = (loader: HTMLElement) => {
    loader.style.transition = 'none';
    loader.style.width = '0%';
    setTimeout(() => {
      loader.style.transition = 'width 3s linear';
      loader.style.width = '100%';
      loader.style.opacity = '1';
    }, 10); // Small delay to reset the transition
  };

  const stopLoader = (loader: HTMLElement) => {
    loader.style.transition = 'none';
    loader.style.width = '0%';
    loader.style.opacity = '0';
  };

  const tabLoop = (): void => {
    tabTimeout = window.setTimeout(() => {
      const currentTab = document.querySelector(
        '.lab-scene_tabs-menu .w--current'
      ) as HTMLElement | null;
      let nextTab: HTMLElement | null = null;

      if (currentTab) {
        nextTab = currentTab.nextElementSibling as HTMLElement | null;
        currentTab.classList.remove('w--current');
        const currentLoader = currentTab.querySelector(
          '.lab-scene_loading-tab'
        ) as HTMLElement | null;
        if (currentLoader) {
          stopLoader(currentLoader);
        }
      }

      if (!nextTab) {
        nextTab = document.querySelector('.lab-scene_tabs-link:first-child') as HTMLElement | null;
      }

      if (nextTab) {
        nextTab.classList.add('w--current');
        const nextLoader = nextTab.querySelector('.lab-scene_loading-tab') as HTMLElement | null;
        if (nextLoader) {
          resetLoader(nextLoader);
        }
        // Manually dispatch the click event and prevent it from propagating
        nextTab.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      }
    }, 3000);
  };

  tabLoop();

  // Reset Loops and Loader on Click
  document.querySelectorAll('.lab-scene_tabs-link').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click event from propagating to other elements
      if (tabTimeout !== undefined) {
        clearTimeout(tabTimeout);
      }
      if (previousTab) {
        const previousLoader = previousTab.querySelector(
          '.lab-scene_loading-tab'
        ) as HTMLElement | null;
        if (previousLoader) {
          stopLoader(previousLoader);
        }
      }
      const loader = button.querySelector('.lab-scene_loading-tab') as HTMLElement | null;
      if (loader) {
        resetLoader(loader);
      }
      previousTab = button as HTMLElement;
      tabLoop();
    });
  });

  // Initial Loader Animation
  document.querySelectorAll('.lab-scene_tabs-link').forEach((tabElement) => {
    const loader = tabElement.querySelector('.lab-scene_loading-tab') as HTMLElement | null;
    if (loader) {
      loader.style.transition = 'none';
      loader.style.width = '0%';
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.transition = 'width 3s linear, opacity 0.3s linear';
        if (tabElement.classList.contains('w--current')) {
          loader.style.width = '100%';
          loader.style.opacity = '1';
        }
      }, 1);
    }
  });
}
