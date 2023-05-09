const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector("#carousel");
const left = document.getElementById("left");
const right = document.getElementById("right");

const SLIDES_COUNT = slides.length;
let current_slide = 0;

left.addEventListener("click", () => {
  current_slide--;
  if (current_slide < 0) {
    current_slide = SLIDES_COUNT - 1;
  }
  updateCarousel();
});

right.addEventListener("click", () => {
  current_slide++;
  if (current_slide > SLIDES_COUNT - 1) {
    current_slide = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`;
  // console.log(slides[0].offsetWidth); // 1006 // static
  document.body.style.backgroundColor = `#${slides[current_slide].getAttribute("data-bg")}`;
}
