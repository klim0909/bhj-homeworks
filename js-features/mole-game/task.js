let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

getHole = (index) => {
  let currentHole = document.getElementById(`hole${index}`);
  currentHole.onclick = function() {
    if (currentHole.className.includes('hole_has-mole')) {
      dead.textContent++;
      if (dead.textContent >= 10) {
        alert("Победа!");
        return location.reload();
        }
          } else {
            lost.textContent++;
            if (lost.textContent >= 5) {
              alert("Вы проиграли");
              return location.reload();
            }
        }
    }
};

for (let index = 1; index <= 9; index ++) {
    getHole(index);
  };
