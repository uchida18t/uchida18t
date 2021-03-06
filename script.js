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

  // scroll-trigger

  const triggers = document.querySelectorAll('.scroll-trigger');
  const mainWrappers = document.querySelectorAll('.main-wrapper');
  
  for (let i = 0; i < 4; i++) {
    const triggerPoint = mainWrappers[i].getBoundingClientRect().top + window.pageYOffset;
    triggers[i].addEventListener('click', () => {
      if (window.innerWidth > 1080) {
        window.scrollTo({
          top: triggerPoint,
          behavior: 'smooth',
        });
      } else if (580 < window.innerWidth <= 1080) {
        window.scrollTo({
          top: triggerPoint,
          behavior: 'smooth',
        });
      }
    });
  }



  // heading

  const headings = document.querySelectorAll('.heading');

  window.addEventListener('scroll', () => {
    headings.forEach(heading => {
      const distanceToHeading = heading.getBoundingClientRect().top;

      if (window.innerWidth > 580) {

        if (distanceToHeading < window.innerHeight * .8) {
          heading.classList.add('appear');
        } else {
          heading.classList.remove('appear');
        }

      } else {

        if (distanceToHeading < window.innerHeight * .9) {
          heading.classList.add('appear');
        } else {
          heading.classList.remove('appear');
        }

      }

    });
  });

  // scrolling event 4

  const cards = document.querySelectorAll('.card');

  window.addEventListener(('scroll'), () => {
    cards.forEach(card => {
      const distanceToCard = card.getBoundingClientRect().top;
      
      if (window.innerWidth > 580) {

        if (distanceToCard < window.innerHeight * .7) {
          card.classList.add('appear');
        } else {
          card.classList.remove('appear');
        }

      } else {

        if (distanceToCard < window.innerHeight * .85) {
          card.classList.add('appear');
        } else {
          card.classList.remove('appear');
        }

      }
    });
  });

}