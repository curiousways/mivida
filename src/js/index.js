document.querySelectorAll('[class^="["]').forEach((el) => {
  const cls = el.getAttribute("class");
  const cleaned = cls.replace(/[\[\]]/g, "").trim();
  el.setAttribute("class", cleaned);
});

const journalSwiper = new Swiper(".journal-sec .swiper", {
  slidesPerView: 1.202,
  spaceBetween: 12,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

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
});

const testimonialSwiper = new Swiper(".testimonial-sec .swiper", {
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.querySelectorAll(".menuBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("toggled");
    document.querySelector(".site-header nav")?.classList.toggle("menuOpen");
    document.querySelector(".site-header")?.classList.toggle("active");
    document.documentElement.classList.toggle("scrollLock");
    document.querySelector("nav")?.classList.toggle("open");
  });
});

window.addEventListener("load", function () {
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    document
      .querySelector(".site-header")
      .classList.toggle("fixed", scrollTop > 100);
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
