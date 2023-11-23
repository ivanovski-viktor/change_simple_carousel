let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

nextBtn.addEventListener("click", () => changeSlide(1));
prevBtn.addEventListener("click", () => changeSlide(-1));

function showSlide(index) {
  // recalculate the currentSlide
  currentSlide = index % totalSlides;
  console.log(currentSlide);
  // move the carousel to the currentSlide
  switch (currentSlide) {
    case 0:
      carousel.style.transform = `translateX(0%)`;
      break;
    case 1:
      carousel.style.transform = `translateX(-100%)`;
      break;
    case 2:
      carousel.style.transform = `translateX(-200%)`;
      break;
    default:
      currentSlide = 2;
      carousel.style.transform = `translateX(-200%)`;
      console.log(currentSlide);
  }
}

function changeSlide(direction) {
  // get the currentSlide value and add the direction to it
  currentSlide += direction;
  // assign that to a local variable called index
  let index = currentSlide;
  // call showSlide with index
  showSlide(index);
}
