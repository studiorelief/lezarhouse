// transform p svg code to svg (slider)
export function svgCms() {
  document.querySelectorAll('[p-cms="svg-code"]').forEach((element) => {
    const svgCode = element.textContent;
    if (svgCode !== null) {
      element.innerHTML = svgCode;
    }
  });
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
