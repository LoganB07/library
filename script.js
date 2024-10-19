function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addNewBook(title, author, pages, read, library) {
    let book = new Book(title, author, pages, read);
    library.push(book);
}

function addCardText(card, spot, book) {
    let text = document.createElement("p");
    text.classList.add(spot);
    text.textContent = `${book[spot]}`;
    card.append(text);
}

/*function updateButton(book, num) {
    let btn = document.querySelector(`.read-btn ${num}`)
    if (book['read']) {
        book['read'] = false;
        btn.textContent = "Not read yet";
    }
    else {
        book['read'] = true;
        btn.textContent = "Read";
    }

}*/

function updateDisplay(library, count) {
    let book = library[count - 1]
    let container = document.querySelector(".library");

    let newCard = document.createElement("div");
    newCard.classList.add("card");

    addCardText(newCard, "title", book);
    addCardText(newCard, "author", book);
    addCardText(newCard, "pages", book);

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("read");
    newCard.append(btnDiv);

    if (book["read"]) {
        let btn = document.createElement("button");
        btn.classList.add("read-btn");
        btn.textContent = `Read`;
        btnDiv.append(btn);
        /*btn.addEventListener("click", () => {
            updateButton();
        })*/
    }
    else { 
        let btn = document.createElement("button");
        btn.classList.add("read-btn");
        btn.textContent = `Not read yet`;
        btnDiv.append(btn);
        /*btn.addEventListener("click", () => {
            updateButton();
        });*/
       
    }

    container.append(newCard);
}

let library = [];
let libraryCount = 0;

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    addNewBook(title, author, pages, read, library);
    libraryCount++;
    updateDisplay(library, libraryCount);
    console.log(library);
});
