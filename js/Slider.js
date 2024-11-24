// Slider functionality
const slider = document.getElementById("slider");
const slides = slider.children;
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
let autoSlideInterval;

// Update slider position
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

// Move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

// Start automatic sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Stop automatic sliding (on user interaction)
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners for navigation buttons
prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

// Start the slider
startAutoSlide();
