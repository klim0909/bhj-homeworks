const textarea = document.getElementById('editor');
const clearBtn = document.getElementById('clear');


function saveText() {
  localStorage.setItem('editorText', textarea.value);
}

textarea.addEventListener('input', saveText);

// Восстанавливаем текст
window.addEventListener('load', () => {
  const savedText = localStorage.getItem('editorText');
  if (savedText) {
    textarea.value = savedText;
  }
});

clearBtn.addEventListener('click', () => {
  textarea.value = '';
  localStorage.removeItem('editorText'); 
});