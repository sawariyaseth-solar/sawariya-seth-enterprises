// ===============================
// Auto Image Slider
// ===============================

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index) {

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    if (slides.length === 0) return;

    slides[index].style.display = "block";
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

// First Slide
showSlide(currentSlide);

// Auto Slide every 4 seconds
setInterval(nextSlide, 4000);