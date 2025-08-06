import Swiper from "swiper";
import { Keyboard, Navigation, } from "swiper/modules";

const projectSections = document.querySelectorAll(".projects");

projectSections.forEach(projectSection => {
  const slider = projectSection.querySelector(".projects-slider");
  const prevArrow = projectSection.querySelector(".slider-arrows__button--prev");
  const nextArrow = projectSection.querySelector(".slider-arrows__button--next");

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
    slidesPerView: 4,
    spaceBetween: 10,
    rewind: true,
  });
});
