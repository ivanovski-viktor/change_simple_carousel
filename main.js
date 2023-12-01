import { changeSlide, nextBtn, prevBtn } from "./carousel.js";
nextBtn.addEventListener("click", () => changeSlide(1));
prevBtn.addEventListener("click", () => changeSlide(-1));

import { addTaskBtn, createTask } from "./todo.js";
addTaskBtn.addEventListener("click", createTask);
