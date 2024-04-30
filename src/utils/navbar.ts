export function toggleSize() {
  const toggleNavbarSize = () => {
    // Basculer l'affichage des textes de la navbar
    document.querySelectorAll('.navbar_text, .navbar_brand-logo-text').forEach((el) => {
      const htmlElement = el as HTMLElement;
      htmlElement.style.display = htmlElement.style.display === 'none' ? '' : 'none';
    });

    // Ajuster la largeur du conteneur de la navbar
    const navbarContainer = document.querySelector('.navbar_container') as HTMLElement | null;
    if (navbarContainer) {
      navbarContainer.style.width = navbarContainer.classList.contains('toggled-size')
        ? ''
        : '2.37rem';
      navbarContainer.classList.toggle('toggled-size');
    }

    // Appliquer les styles de padding spécifiques aux liens de la navbar
    document.querySelectorAll('.navbar_menu-link').forEach((el) => {
      const htmlElement = el as HTMLElement;
      if (navbarContainer && navbarContainer.classList.contains('toggled-size')) {
        // Ajouter une classe pour appliquer le style souhaité (remplacez 'custom-padding' par votre classe CSS)
        htmlElement.classList.add('custom-padding');
      } else {
        // Retirer la classe lorsque le conteneur de la navbar est dans son état normal
        htmlElement.classList.remove('custom-padding');
      }
    });
  };

  // Ajouter l'écouteur d'événement au bouton de basculement
  const toggleButton = document.querySelector('.navbar_toggle-size');
  if (toggleButton) toggleButton.addEventListener('click', toggleNavbarSize);
}
