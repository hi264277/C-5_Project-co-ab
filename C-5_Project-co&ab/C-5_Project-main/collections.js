document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    nextButton.addEventListener('click', function() {
      slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
    });
  
    prevButton.addEventListener('click', function() {
      slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
    });
  
    function checkScreenSize() {
      if (window.innerWidth > 768) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
      } else {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
      }
    }
  
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
  });
  