const modal = document.getElementById('subscribe-modal');
const closeBtn = modal.querySelector('.modal__close');

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  
  document.cookie = 'modalClosed=true'; 
});

if (!document.cookie.includes('modalClosed=true')) {
  modal.classList.add('modal_active');
}