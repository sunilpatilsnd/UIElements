import "../css/style.css";
const { toggleDropdown } = require("./dropdown.js");
const { setCarousel } = require("./carousel.js");

const demo1 = () => {
  const btn = document.querySelector("#menuBtn");
  const menu = document.querySelector("#menu");
  toggleDropdown(btn, menu);
};

const demo2 = () => {
  const btn = document.querySelector("#footerMenuBtn");
  const menu = document.querySelector("#footerMenu");

  toggleDropdown(btn, menu);
};

demo1();
demo2();

const carousel = document.querySelector(".carousel");

setCarousel(carousel);
