const sliderContainer = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const totalSlides = slides.length;
const slidesToShow = 3; // Number of images to show at a time

// Update slider position
function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  sliderContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
}

// Move to the next slide
nextButton.addEventListener("click", () => {
  if (currentIndex < totalSlides - slidesToShow) {
    currentIndex++;
    updateSliderPosition();
  }
});

// Move to the previous slide
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});
