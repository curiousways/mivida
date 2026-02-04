const journalSwiper = new Swiper(".c-card-slider-sec.swiper", {
  slidesPerView: 1.202,
  spaceBetween: 12,
  loop: true,

  breakpoints: {
    641: {
      slidesPerView: "auto",
      spaceBetween: 15,
      grid: {
        rows: 2,
        fill: "column",
      },
    },
  },
  navigation: {
    nextEl: ".journal-sec .swiper-button-next",
    prevEl: ".journal-sec .swiper-button-prev",
  },
});

const testimonialSwiper = new Swiper(".c-testimonial-sec .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  watchSlidesProgress: true,
  updateOnWindowResize: true,
  navigation: {
    nextEl: ".c-testimonial-sec .swiper-button-next",
    prevEl: ".c-testimonial-sec .swiper-button-prev",
  },
});

const stepSlider = new Swiper(".c-step-slider-sec .c-step-slider", {
  slidesPerView: 1.181,
  spaceBetween: 20,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  watchSlidesProgress: true,
  updateOnWindowResize: true,
  navigation: {
    nextEl: ".c-step-slider-sec .swiper-button-next",
    prevEl: ".c-step-slider-sec .swiper-button-prev",
  },
  breakpoints: {
    641: {
      spaceBetween: 30,
    },
  },
});

const ValueSlider = new Swiper(".c-values-slider-sec .c-values-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  watchSlidesProgress: true,
  updateOnWindowResize: true,
  navigation: {
    nextEl: ".c-values-slider-sec .swiper-button-next",
    prevEl: ".c-values-slider-sec .swiper-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 0,
      slidesPerView: 1,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    },
  },
});
const commitmentMobSlider = new Swiper(
  ".c-commitments-sec .c-commitment-card-wrapper",
  {
    slidesPerView: 1.18,
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },

    navigation: {
      nextEl: ".c-commitments-sec .swiper-button-next",
      prevEl: ".c-commitments-sec .swiper-button-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: false,
      },
      1025: {
        slidesPerView: "auto",
        allowTouchMove: false,
        simulateTouch: false,
        spaceBetween: 0,
      },
    },
  },
);

document.querySelectorAll(".c-menu-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("toggled");
    document.querySelector(".c-site-header nav")?.classList.toggle("menuOpen");
    document.querySelector(".c-site-header")?.classList.toggle("active");
    document.documentElement.classList.toggle("scrollLock");
    document.querySelector("nav")?.classList.toggle("open");
  });
});

window.addEventListener("load", function () {
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    document
      .querySelector(".c-site-header")
      .classList.toggle("fixed", scrollTop > 100);
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
