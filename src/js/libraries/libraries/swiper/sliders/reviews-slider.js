import Swiper from "swiper";
import { Keyboard, Navigation, } from "swiper/modules";

const reviewsSections = document.querySelectorAll(".reviews");

reviewsSections.forEach(reviewsSection => {
  const slider = reviewsSection.querySelector(".reviews-slider");
  const prevArrow = reviewsSection.querySelector(".slider-arrows__button--prev");
  const nextArrow = reviewsSection.querySelector(".slider-arrows__button--next");

  const swiper = new Swiper(slider, {
    modules: [Keyboard, Navigation],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: nextArrow,
      prevEl: prevArrow,
    },
    slidesPerView: 3.383333333333333,
    spaceBetween: 10,
    rewind: true,
  });
});
