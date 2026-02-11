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
  // loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  watchSlidesProgress: true,
  updateOnWindowResize: true,
  navigation: {
    nextEl: ".c-testimonial-sec .swiper-button-next",
    prevEl: ".c-testimonial-sec .swiper-button-prev",
  },
});

const stepSlider = new Swiper(".c-step-slider-sec .c-step-slider", {
  slidesPerView: 1.12,
  spaceBetween: 25,

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
    slidesPerView: 1.12,
    spaceBetween: 25,

    navigation: {
      nextEl: ".c-commitments-sec .swiper-button-next",
      prevEl: ".c-commitments-sec .swiper-button-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: "auto",
        spaceBetween: 20,
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
const standardCardMobSlider = new Swiper(
  ".c-standard-card-sec .c-standard-card-slider",
  {
    slidesPerView: 1.12,
    spaceBetween: 25,

    navigation: {
      nextEl: ".c-standard-card-sec .swiper-button-next",
      prevEl: ".c-standard-card-sec .swiper-button-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: "auto",
        spaceBetween: 25,
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

const articleCardMobSlider = new Swiper(".c-article-card-wrapper", {
  slidesPerView: 1.12,
  spaceBetween: 25,

  navigation: {
    nextEl: ".c-multicolor-article-cards .swiper-button-next",
    prevEl: ".c-multicolor-article-cards .swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: "auto",
      spaceBetween: 25,
      loop: false,
    },
    1025: {
      slidesPerView: "auto",
      allowTouchMove: false,
      simulateTouch: false,
      spaceBetween: 0,
    },
  },
});

const mostarticleCardMobSlider = new Swiper(
  ".c-article-grid-editorial-sec .c-article-grid-editorial-slider",
  {
    slidesPerView: 1.12,
    spaceBetween: 25,

    navigation: {
      nextEl: ".c-article-grid-editorial-sec .swiper-button-next",
      prevEl: ".c-article-grid-editorial-sec .swiper-button-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: "auto",
        spaceBetween: 25,
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

const verticalCardMobSlider = new Swiper(
  ".c-article-grid-equal .c-vertical-card-slider",
  {
    slidesPerView: 1.15,
    spaceBetween: 25,
    navigation: {
      nextEl: ".c-article-grid-equal .swiper-button-next",
      prevEl: ".c-article-grid-equal .swiper-button-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: "auto",
        spaceBetween: 25,
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

const filterButtons = document.querySelectorAll(".c-filter-btn button");
const teamCards = document.querySelectorAll(".c-filter-content");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterValue = btn.dataset.filter;

    // active button
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // cards filter
    teamCards.forEach((card) => {
      if (filterValue === "all" || card.dataset.filter.includes(filterValue)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const accorHeadings = document.querySelectorAll(".c-accor-heading");
accorHeadings.forEach((heading) => {
  heading.addEventListener("click", () => {
    const row = heading.parentElement;
    const content = row.querySelector(".c-accor-content");

    // close others (optional – remove if multiple open chahiye)
    document.querySelectorAll(".c-accor-row").forEach((item) => {
      if (item !== row) {
        item.classList.remove("active");
        item.querySelector(".c-accor-content").style.maxHeight = null;
      }
    });

    // toggle current
    row.classList.toggle("active");

    if (row.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

const wrap = document.querySelector(".c-search-wrap");
const btn = document.getElementById("c-search-expand");

if (wrap && btn) {
  const input = wrap.querySelector(".c-search-input");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrap.classList.add("active");
    input?.focus();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".c-search-wrap")) {
      wrap.classList.remove("active");
      if (input) input.value = "";
    }
  });
}

if (!document.querySelector(".c-announcement-bar")) {
  document.body.classList.add("c-no-announcement-bar");
}

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

function updateTouchViewport() {
  if (window.innerWidth <= 1339) {
    document.querySelectorAll(".touch-viewport-left").forEach((el) => {
      el.style.marginLeft = "";
    });
    document.querySelectorAll(".touch-viewport-right").forEach((el) => {
      el.style.marginRight = "";
    });
    return;
  }

  const container = document.querySelector(".l-container-wide");
  if (!container) return;

  const containerWidth = container.offsetWidth;
  const bodyWidth = document.body.offsetWidth;
  const specialConSpace = (bodyWidth - containerWidth) / 2;

  document.querySelectorAll(".touch-viewport-left").forEach((el) => {
    el.style.marginLeft = `-${specialConSpace}px`;
  });

  document.querySelectorAll(".touch-viewport-right").forEach((el) => {
    el.style.marginRight = `-${specialConSpace}px`;
  });
}

// on load
window.addEventListener("load", updateTouchViewport);

// on resize
window.addEventListener("resize", updateTouchViewport);
