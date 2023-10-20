let book = document.querySelector(".book__content")
let fontSize = Array.from(document.querySelectorAll(".font-size"))

fontSize.forEach((item) => {
    item.addEventListener('click', (e) => {
        let active = fontSize.find(item => item.className.includes("font-size_active"))
        e.preventDefault()
        active.classList.remove("font-size_active")
        item.classList.add("font-size_active")
        if (item.className.includes('font-size_big')) {
            book.classList.remove("book_fs-small")
            book.classList.add("book_fs-big")
        } 
        else if (item.className.includes('font-size_small')) {
            book.classList.remove("book_fs-big")
            book.classList.add("book_fs-small")
        } 
        else {
            book.classList = "book";
        }
    });
});
