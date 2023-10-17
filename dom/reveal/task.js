let items = document.querySelectorAll(".reveal");

const isVisibol = function(el){
    const {top, bottom} = el.getBoundingClientRect()

    if(bottom < 0){
        return false;
    }
    if(top > window.innerHeight){
        return false;
    }
        return true;

}
function checkReveals() {
    [...items].forEach(element => {
          if (isVisibol(element)) {
              if (!element.classList.contains("reveal_active")) {
                  element.classList.add("reveal_active");
              }
          } else {
                  element.classList.remove("reveal_active");
          }
      });
  }
  window.addEventListener("scroll", checkReveals, false);

checkReveals();
