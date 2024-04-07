/* ****************************************************** Navbar *********************************************************** */

const open = document.querySelector('.container');
const close = document.querySelector('.close');
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.to('.nav1', { right: 0 })
      .to('.nav1', { height: '70vh' }, '-=.1')
      .to(
        '.nav1 ul li a',
        { opacity: 1, pointerEvents: 'all', stagger: 0.2 },
        '-=.8'
      )
      .to('.close', { opacity: 1, pointerEvents: 'all' }, '-=.8')
      .to('.nav1 h2', { opacity: 1 }, '-=1');
  }
});

close.addEventListener('click', () => {
  tl.reverse();
});

/* ****************************************************** Navbar *********************************************************** */
