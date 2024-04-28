/* ****************************************************** Scroll *********************************************************** */

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

/* ****************************************************** Scroll *********************************************************** */

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

class Slider {
  constructor() {
    this.el = document.querySelector('.js-slider');
    this.images = [...this.el.querySelectorAll('.js-slide__image')];
    this.contents = [...this.el.querySelectorAll('.js-slide__content')];

    this.data = {
      current: 0,
      last: 0,
      total: this.images.length - 1,
    };

    this.state = {
      animating: false,
    };

    this.next = this.next.bind(this);

    this.init();
    this.startAutoplay();
  }

  changeSlide() {
    this.state.animating = true;

    const currentImageSlide = this.images[this.data.last];
    const nextImageSlide = this.images[this.data.current];

    const currentContent = this.contents[this.data.last];
    const nextContent = this.contents[this.data.current];

    const currentContentItems =
      currentContent.querySelectorAll('.js-stagger-item');
    const nextContentItems = nextContent.querySelectorAll('.js-stagger-item');

    const currentImageSlideImg = currentImageSlide.querySelector('img');
    const nextImageSlideImg = nextImageSlide.querySelector('img');

    const tl = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.state.animating = false;
      },
    });

    tl.set([nextImageSlide, nextContent], {
      autoAlpha: 1,
      zIndex: 2,
    })
      .set([currentImageSlide, currentContent], {
        zIndex: 1,
      })
      .staggerFromTo(
        currentContentItems,
        0.75,
        {
          y: 0,
          alpha: 1,
        },
        {
          y: -30,
          alpha: 0,
          ease: Expo.easeIn,
        },
        0.075,
        0
      )
      .fromTo(
        currentImageSlide,
        1.5,
        {
          xPercent: 0,
        },
        {
          xPercent: -15,
          ease: Expo.easeInOut,
        },
        0
      )
      .fromTo(
        nextImageSlide,
        1.5,
        {
          xPercent: 100,
        },
        {
          xPercent: 0,
          ease: Expo.easeInOut,
        },
        0
      )
      .fromTo(
        nextImageSlideImg,
        1.5,
        {
          xPercent: -100,
          scale: 1.2,
        },
        {
          xPercent: 0,
          scale: 1,
          ease: Expo.easeInOut,
        },
        0
      )
      .staggerFromTo(
        nextContentItems,
        1,
        {
          y: 60,
          alpha: 0,
        },
        {
          y: 0,
          alpha: 1,
          ease: Expo.easeOut,
        },
        0.075,
        0.75
      )
      .set([currentImageSlide, currentContent], {
        autoAlpha: 0,
      });

    tl.play();
  }

  next() {
    if (this.state.animating) return;

    this.data.last = this.data.current;
    this.data.current =
      this.data.current === this.data.total ? 0 : this.data.current + 1;

    this.changeSlide();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, 3000);
  }

  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }

  addListeners() {
    this.el.addEventListener('click', this.next);
    this.el.addEventListener('mouseenter', () => {
      this.stopAutoplay();
    });
    this.el.addEventListener('mouseleave', () => {
      this.startAutoplay();
    });
  }

  init() {
    this.addListeners();
  }
}

const slider = new Slider();

/* *************************************************** Image Slider ******************************************************** */
