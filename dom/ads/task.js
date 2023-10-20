const rotator = document.querySelector('.rotator');
let activeRotator = null;

setTimeout(function rotate() {
  if (activeRotator != null) {
    activeRotator.classList.remove('rotator__case_active');
    activeRotator = activeRotator.nextElementSibling;
  }
  if (activeRotator === null) {
    activeRotator = rotator.querySelector('.rotator__case');
  }  
  if (activeRotator != null) {
    activeRotator.style.color = activeRotator.dataset.color;
    activeRotator.classList.add('rotator__case_active');
  
    setTimeout(rotate, activeRotator.dataset.speed);
  }  
}, 1000)
