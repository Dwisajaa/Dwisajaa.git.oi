document.addEventListener("DOMContentLoaded", function(event) {
    var letters = document.querySelectorAll('.letter');
    setTimeout(function() {
        letters.forEach(function(letter, index) {
            setTimeout(function() {
                letter.classList.add('animated');
            }, index * 500); // Delay animasi muncul
        });
    }, 1000); // Delay sebelum animasi dimulai
});
