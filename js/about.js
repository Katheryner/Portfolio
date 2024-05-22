let slideIndex = 0;
const intervalTime = 3000; // Intervalo de tiempo en milisegundos (3 segundos)

function showSlides() {
  const slides = document.querySelectorAll(".carousel-slide");
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

// Mostrar la primera diapositiva al cargar la página
showSlides();

// Avanzar automáticamente las diapositivas cada 'intervalTime' milisegundos
setInterval(() => {
  showSlides();
}, intervalTime);

const idButton = document.getElementById("show_more");
const description = document.querySelector(".story");
console.log(idButton.getAttribute("data-arrow"));
idButton.addEventListener("click", () => {
  description.classList.toggle("full_story");
  if (idButton.getAttribute("data-arrow") == "↓") {
    idButton.setAttribute("data-arrow", "↑");
    idButton.style.position = "relative";
  } else {
    idButton.setAttribute("data-arrow", "↓");
    idButton.style.position = "absolute";
  }
});
