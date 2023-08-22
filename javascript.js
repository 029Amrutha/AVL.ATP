const images = ['image1.jfif', 'image2.jpg']; // List of image file names
let currentIndex = 0; // Current index of displayed image

function showImage(index) {
    document.getElementById('slider-image').src = images[index];
    currentIndex = index;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Automatic Slide Show
function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000); // Change image every 3 seconds
}

autoSlide(); // Start the automatic slide show