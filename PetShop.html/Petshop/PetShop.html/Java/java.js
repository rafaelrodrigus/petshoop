// Adicione esta parte ao seu arquivo script.js

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Muda de slide a cada 5 segundos (ajuste conforme necessário)
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
