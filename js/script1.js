document.addEventListener("DOMContentLoaded", function(event) {
    var images = document.querySelectorAll('.collage-image');
    images.forEach(function(image, index) {
        setTimeout(function() {
            image.classList.add('animated');
        }, index * 500); // Delay animasi muncul
    });
});
