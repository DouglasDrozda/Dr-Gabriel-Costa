import ScrollReveal from 'scrollreveal';

function animateScroll() {

  const scroll = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 3000,
    reset: false,
  });
  scroll.reveal('.apresentation-title', { delay: 200 });
  scroll.reveal('.ul-1', { delay: 200 });
  scroll.reveal('.logo-whats', { delay: 200 });

  const scroll1 = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 3000,
  });
  scroll1.reveal('.ul-2', { delay: 200 });

  const scroll2 = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 3000,
  });
  scroll2.reveal('.about-text-container', { delay: 200 });

}

export default animateScroll;
