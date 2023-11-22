let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

nextBtn.addEventListener("click", () => changeSlide(1));
prevBtn.addEventListener("click", () => changeSlide(-1));

function showSlide(index) {
  // recalculate the currentSlide
  // move the carousel to the currentSlide
}

function changeSlide(direction) {
  // get the currentSlide value and add the direction to it
  // assign that to a local variable called index
  // call showSlide with index
}
