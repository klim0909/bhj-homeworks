const form = document.getElementById('signin__form');

const welcomeBlock = document.getElementById('welcome');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    login: form.login.value,
    password: form.password.value
  };

  fetch('https://students.netoservices.ru/nestjs-backend/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    if (result.success) {
      localStorage.setItem('userId', result.user_id);
      welcomeBlock.querySelector('#user_id').textContent = result.user_id;
      welcomeBlock.classList.add('welcome_active');
    } else {
      alert('Неверный логин/пароль'); 
    }
  });

});

const userId = localStorage.getItem('userId');
if (userId) {
  welcomeBlock.querySelector('#user_id').textContent = userId;
  welcomeBlock.classList.add('welcome_active');
}