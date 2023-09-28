let seconds = 60;
    let timer = setInterval(function() {
        seconds--;
        if (seconds <= 0) {
            clearInterval(timer);
            return alert( "Вы победили в конкурсе!" );
        }
        document.getElementById("timer").innerHTML = seconds;
    }, 1000);
