// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  var testimonialDelay = 0;
  try {
    if (window.fraxinus && typeof window.fraxinus.testimonialAutoplayDelay !== 'undefined') {
      testimonialDelay = Number(window.fraxinus.testimonialAutoplayDelay) || 0;
    }
  } catch (e) {
    testimonialDelay = 0;
  }

  var testimonialOptions = {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };

  if (testimonialDelay > 0) {
    testimonialOptions.autoplay = {
      delay: testimonialDelay,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    };
  }

  new Swiper(".testimonial-slider", testimonialOptions);
})();
