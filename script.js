/* ****************************************************** Navbar *********************************************************** */

const open = document.querySelector('.container');
const close = document.querySelector('.close');
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.to('.nav1', { right: 0 })
      .to('.nav1', { height: '100vh' }, '-=.1')
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

/* ****************************************************** Loader *********************************************************** */

var loader = document.querySelector('.loader');
var loadingOverlay = document.querySelector('.overlay1');

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    loader.classList.remove('loader');
    loadingOverlay.style.display = 'none';
  }, 1000);
});

/* ****************************************************** Loader *********************************************************** */
