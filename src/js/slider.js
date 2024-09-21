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
  console.log("prev clicked");
});

// S-Slider Section Latest New
$(document).ready(function () {
  var $slider = $(".slick-slider");

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  // Custom navigation buttons
  $("#prev").click(function () {
    $slider.slick("slickPrev");
  });

  $("#next").click(function () {
    $slider.slick("slickNext");
  });
});

// ADD: When I clicked to this list make filter to this card

document.addEventListener("DOMContentLoaded", function () {
  const catItems = document.querySelectorAll(".cat-item");
  const cardContainers = document.querySelectorAll(".card-container");

  catItems.forEach((item) => {
    item.addEventListener("click", function () {
      const target = this.getAttribute("data-category");

      // Remove active class from all buttons
      catItems.forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      this.classList.add("active");

      // Show/hide cards based on the clicked button with smooth transition
      cardContainers.forEach((container) => {
        if (
          target === "all" ||
          container.getAttribute("data-category") === target
        ) {
          container.style.opacity = "1";
          container.style.maxHeight = "1000px"; // Set a high value for max-height
          container.style.overflow = "hidden";
        } else {
          container.style.opacity = "0";
          container.style.maxHeight = "0";
          container.style.overflow = "hidden";
        }
      });
    });
  });
});
