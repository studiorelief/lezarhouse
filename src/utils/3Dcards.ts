import VanillaTilt from 'vanilla-tilt';

export function applyHoverEffect() {
  const elements = document.querySelectorAll(
    '.house-membership_carte-w, .c-angels-layout_middle-cards-w'
  );
  VanillaTilt.init(Array.from(elements) as HTMLElement[], {});
}
