let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(n) {
    currentIndex = (currentIndex + n + slides.length) % slides.length;
    updateSlider();
}

function updateSlider() {
    const transformValue = -currentIndex * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + transformValue + ')';
}

document.getElementById('apartmentBox').addEventListener('click', openOverlay);

function openOverlay() {
  document.getElementById('aboutOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Disable scrolling when overlay is open
}

function closeOverlay() {
  document.getElementById('aboutOverlay').style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling when overlay is closed
}

  
