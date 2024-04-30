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
