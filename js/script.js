//função para o Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//funcao para alternar a shelf de produtos
var slideI = 1;
mostrarSlides(slideI);

function maisSlides(n) {
  mostrarSlides(slideI += n);
}

function mostrarSlides(n) {
  var i;
  var slides = document.getElementsByClassName("prateleira");
  if (n > slides.length) {slideI = 1}
  if (n < 1) {slideI = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  } 
  slides[slideI-1].style.display = "flex";
}