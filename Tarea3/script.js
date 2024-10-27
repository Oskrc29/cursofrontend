let slideIndex = 0;

function mostrarSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function cambiarSlide(n) {
    mostrarSlide(slideIndex += n);
}

mostrarSlide(slideIndex);     