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

  const resetLoader = (loader: HTMLElement) => {
    loader.style.transition = 'none';
    loader.style.width = '0%';
    setTimeout(() => {
      loader.style.transition = 'width 6s linear';
      loader.style.width = '100%';
      loader.style.opacity = '1';
    }, 10); // Small delay to reset the transition
  };

  const stopLoader = (loader: HTMLElement) => {
    loader.style.transition = 'none';
    loader.style.width = '0%';
    loader.style.opacity = '0';
  };

  const changeTab = (currentTab: HTMLElement | null, nextTab: HTMLElement | null) => {
    if (currentTab) {
      currentTab.classList.remove('w--current');
      const currentLoader = currentTab.querySelector(
        '.lab-scene_loading-tab'
      ) as HTMLElement | null;
      if (currentLoader) {
        stopLoader(currentLoader);
      }

      const currentPaneId = currentTab.getAttribute('href')?.substring(1);
      if (currentPaneId) {
        const currentPane = document.getElementById(currentPaneId);
        if (currentPane) {
          currentPane.classList.remove('w--tab-active');
        }
      }
    }

    if (nextTab) {
      nextTab.classList.add('w--current');
      const nextLoader = nextTab.querySelector('.lab-scene_loading-tab') as HTMLElement | null;
      if (nextLoader) {
        resetLoader(nextLoader);
      }

      const nextPaneId = nextTab.getAttribute('href')?.substring(1);
      if (nextPaneId) {
        const nextPane = document.getElementById(nextPaneId);
        if (nextPane) {
          nextPane.classList.add('w--tab-active');
        }
      }
    }
  };

  const tabLoop = (): void => {
    tabTimeout = window.setTimeout(() => {
      const currentTab = document.querySelector(
        '.lab-scene_tabs-menu .w--current'
      ) as HTMLElement | null;
      let nextTab: HTMLElement | null = null;

      if (currentTab) {
        nextTab = currentTab.nextElementSibling as HTMLElement | null;
      }

      if (!nextTab) {
        nextTab = document.querySelector('.lab-scene_tabs-link:first-child') as HTMLElement | null;
      }

      changeTab(currentTab, nextTab);

      tabLoop();
    }, 6000);
  };

  tabLoop();

  // Reset Loops and Loader on Click
  document.querySelectorAll('.lab-scene_tabs-link').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default action of the click
      event.stopPropagation(); // Prevent click event from propagating to other elements
      if (tabTimeout !== undefined) {
        clearTimeout(tabTimeout);
      }
      const currentTab = document.querySelector(
        '.lab-scene_tabs-menu .w--current'
      ) as HTMLElement | null;
      const nextTab = button as HTMLElement;
      changeTab(currentTab, nextTab);
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
        loader.style.transition = 'width 6s linear, opacity 0.3s linear';
        if (tabElement.classList.contains('w--current')) {
          loader.style.width = '100%';
          loader.style.opacity = '1';
        }
      }, 1);
    }
  });
}
