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

export function cmsPopup() {
  const openModalButtons = document.querySelectorAll<HTMLElement>('.a--c--slider-open-modal');
  const modalBackgrounds = document.querySelectorAll<HTMLElement>('.c--slider_modal-background');

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const { id } = button;
      const modalWrappers = document.querySelectorAll<HTMLElement>('.c--slider_modal-wrapper');

      modalWrappers.forEach((modalWrapper) => {
        if (modalWrapper.id === id) {
          modalWrapper.style.display = 'block';
        } else {
          modalWrapper.style.display = 'none';
        }
      });

      openModalButtons.forEach((btn) => {
        if (btn.id === id) {
          btn.classList.add('is-active');
        } else {
          btn.classList.remove('is-active');
        }
      });
    });
  });

  modalBackgrounds.forEach((background) => {
    background.addEventListener('click', () => {
      const modalWrappers = document.querySelectorAll<HTMLElement>('.c--slider_modal-wrapper');
      modalWrappers.forEach((modalWrapper) => {
        modalWrapper.style.display = 'none';
      });

      openModalButtons.forEach((btn) => {
        btn.classList.remove('is-active');
      });
    });
  });

  openModalButtons[1].classList.add('is-active');
}
