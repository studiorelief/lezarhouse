export function cmsPlaylist() {
    const scrollCards = document.querySelectorAll<HTMLElement>('.lab-playlist_scroll-card');
    let currentIndex = 0;
    let intervalId: ReturnType<typeof setInterval>;

    scrollCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        activateCard(index);
        resetAutoClick(index);
      });
    });
  
    function activateCard(index: number) {
      const mainCards = document.querySelectorAll<HTMLElement>('.lab-playlist_main-card');
  
      mainCards.forEach((mainCard) => {
        if (mainCard.id === scrollCards[index].id) {
          mainCard.style.display = 'block';
        } else {
          mainCard.style.display = 'none';
        }
      });
  
      scrollCards.forEach((scrollCard, i) => {
        if (i === index) {
          scrollCard.classList.add('is-active');
        } else {
          scrollCard.classList.remove('is-active');
        }
      });
  
      currentIndex = index; // Update current index to the clicked index
    }
  
    function autoClick() {
      currentIndex = (currentIndex + 1) % scrollCards.length;
      activateCard(currentIndex);
    }

    function resetAutoClick(index: number) {
      clearInterval(intervalId);
      currentIndex = index;
      intervalId = setInterval(autoClick, 2000);
    }
  
    scrollCards[0].classList.add('is-active');
    intervalId = setInterval(autoClick, 2000);
}
