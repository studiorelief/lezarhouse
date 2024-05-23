// transform p svg code to svg (slider)
export function svgCms() {
  document.querySelectorAll('[p-cms="svg-code"]').forEach((element) => {
    const svgCode = element.textContent;
    if (svgCode !== null) {
      element.innerHTML = svgCode;
    }
  });
}

// Show image main from list + add state
export function cmsPlaylist() {
  const scrollCards = document.querySelectorAll<HTMLElement>('.lab-playlist_scroll-card');

  scrollCards.forEach((card) => {
    card.addEventListener('click', () => {
      const { id } = card;
      const mainCards = document.querySelectorAll<HTMLElement>('.lab-playlist_main-card');

      mainCards.forEach((mainCard) => {
        if (mainCard.id === id) {
          mainCard.style.display = 'block';
        } else {
          mainCard.style.display = 'none';
        }
      });

      scrollCards.forEach((scrollCard) => {
        if (scrollCard.id === id) {
          scrollCard.classList.add('is-active');
        } else {
          scrollCard.classList.remove('is-active');
        }
      });
    });
  });

  scrollCards[1].classList.add('is-active');
}
