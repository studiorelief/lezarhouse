export function homeTextAnimation() {
  window.addEventListener('load', () => {
    const navLinks = document.querySelectorAll('.home-hero_nav-link');
    const heading = document.querySelector('.home-hero_heading');

    if (heading) {
      heading.textContent = 'Lezar'; // Titre d'origine

      navLinks.forEach((navLink) => {
        navLink.addEventListener('mouseenter', () => {
          const textElement = navLink.querySelector('.home-hero_nav-text');
          if (textElement) {
            heading.textContent = textElement.textContent || '';
          }
        });

        navLink.addEventListener('mouseleave', () => {
          heading.textContent = 'Lezar'; // Réinitialiser au titre d'origine
        });
      });
    }
  });
}
