const dropdown__value = document.querySelector(".dropdown__value");
const dropdown__list = document.querySelector(".dropdown__list");
const dropdown__links = Array.from(document.querySelectorAll(".dropdown__link"));

function show_list() {
   if (dropdown__list.style.display == "block") {
      dropdown__list.style.display = "none";
   } else {
      dropdown__list.style.display = "block";
   }
}

dropdown__links.forEach(link => {
   link.onclick = (e) => {
      e.preventDefault();
      dropdown__value.textContent = e.target.textContent;
      dropdown__list.classList.remove('dropdown__list_active');
   }
});
