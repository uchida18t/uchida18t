'use strict';

{
  // header, headerMenu

  const headerBars = document.getElementById('headerBars');
  const headerMenu = document.getElementById('headerMenu');
  const headerTimes = document.getElementById('headerTimes');

  headerBars.addEventListener('click', () => {
    headerBars.classList.add('slide-left');
    headerMenu.classList.add('slide-in');
  });
  
  headerTimes.addEventListener('click', () => {
    headerBars.classList.remove('slide-left');
    headerMenu.classList.remove('slide-in');
  });

  // heading

  const headings = document.querySelectorAll('.heading');

  window.addEventListener('scroll', () => {
    headings.forEach(heading => {
      const distanceToHeading = heading.getBoundingClientRect().top;

      if (distanceToHeading < window.innerHeight * .8) {
        heading.classList.add('appear');
      } else {
        heading.classList.remove('appear');
      }
    });
  });

  // scrolling event 4

  const cards = document.querySelectorAll('.card');

  // window.addEventListener(('scroll'), () => {
  //   for (let i = 0; i < cards.length; i++) {
  //     const cardsDistance = cards[i].getBoundingClientRect().top;

  //     if (cards[i].clientHeight * -1 < cardsDistance < window.innerHeight * .7) {
  //       cards[i].classList.add('appear');
  //     } else {
  //       cards[i].classList.remove('appear');
  //     }

  //   }
  // });

  window.addEventListener(('scroll'), () => {
    cards.forEach(card => {
      const distanceToCard = card.getBoundingClientRect().top;
      // console.log(card.clientHeight * -1);
      if (distanceToCard < window.innerHeight * .7) {
        card.classList.add('appear');
      }
    });
  });

}