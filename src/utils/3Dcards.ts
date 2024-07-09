import VanillaTilt from 'vanilla-tilt';

export function applyHoverEffect() {
  const elements = document.querySelectorAll('.house-membership_carte-w');
  VanillaTilt.init(Array.from(elements) as HTMLElement[], {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5,
  });
}
