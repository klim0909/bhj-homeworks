const item = document.getElementById("items");
let answerRequest;

function addCourse(valute, cost){
    return `
        <div class="item">
            <div class="item__code">
                ${valute}
            </div>
            <div class="item__value">
                ${cost}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
    `;
}
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = function () {
    if(xhr.readyState === xhr.DONE) {
        answerRequest = xhr.responseText;
    }
}

xhr.addEventListener('readystatechange', () => {
        const answerCourse = JSON.parse(answerRequest);
        if(answerCourse.response.Valute){
           const valute = answerCourse.response.Valute;
            for(const key of Object.entries(valute)) {
                const valute = key[1].CharCode;
                const cost = key[1].Value;
                item.insertAdjacentHTML('afterbegin', addCourse(valute, cost));
                const loader = document.querySelector(".loader");
                loader.classList.remove("loader_active");
            }
        }  
});