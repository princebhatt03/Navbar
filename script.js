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
  loader.classList.remove('loader');
  loadingOverlay.style.display = 'none';
});

/* ****************************************************** Loader *********************************************************** */

/* *************************************************** Image Slider ******************************************************** */

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 5000;

nextDom.onclick = function () {
  showSlider('next');
};

prevDom.onclick = function () {
  showSlider('prev');
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
  let thumbnailItemsDom = document.querySelectorAll(
    '.carousel .thumbnail .item'
  );

  if (type === 'next') {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add('prev');
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

/* *************************************************** Image Slider ******************************************************** */
