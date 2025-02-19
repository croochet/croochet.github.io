const images = document.querySelectorAll('.top-row img');
const main = document.querySelector('#main');

function gallerySwap(event) {
  const clicked = event.currentTarget; // The clicked image in the top row
  const mainSrc = main.src; // Store the current main image source
  const mainAlt = main.alt; // Store the current main image alt text

  
  main.classList.add('pop');
  clicked.classList.add('pop');

  setTimeout(() => {
    
    main.src = clicked.src;
    main.alt = clicked.alt;

    clicked.src = mainSrc;
    clicked.alt = mainAlt;

    
    main.classList.remove('pop');
    clicked.classList.remove('pop');
  }, 300); 
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleFullscreen");
  const fullscreenView = document.getElementById("fullscreenView");
  const exitFullscreen = document.getElementById("exitFullscreen");
  const slides = document.querySelector(".slides");

  let images = slides.querySelectorAll("img");
  let index = 0;
  let interval;

  // Clone the first image and append it to the end
  const firstClone = images[0].cloneNode(true);
  slides.appendChild(firstClone);

  function startSlideshow() {
    interval = setInterval(() => {
      index++;

      slides.style.transition = "transform 1s ease-in-out";
      slides.style.transform = `translateX(-${index * 100}vw)`;

      // Reset when reaching the cloned image (seamless effect)
      setTimeout(() => {
        if (index === images.length) {
          slides.style.transition = "none"; // Remove transition for instant jump
          slides.style.transform = "translateX(0)"; // Jump to the first image
          index = 0;
        }
      }, 1000);
    }, 3000);
  }

  function stopSlideshow() {
    clearInterval(interval);
  }

  // Enter fullscreen
  toggleButton.addEventListener("click", function () {
    fullscreenView.style.display = "flex";
    setTimeout(() => {
      // Start sliding transition
      fullscreenView.classList.add("active");
    }, 50); // Delay to allow for smooth transition

    startSlideshow();
  });

  // Exit fullscreen
  exitFullscreen.addEventListener("click", function () {
    fullscreenView.classList.remove("active");
    stopSlideshow();
    slides.style.transition = "none"; // Prevent animation glitch
    slides.style.transform = "translateX(0)"; // Reset to first image
    index = 0;

    setTimeout(() => {
      fullscreenView.style.display = "none";
    }, 300); // Wait for animation to finish before hiding
  });
});

images.forEach(image => image.addEventListener('click', gallerySwap));
