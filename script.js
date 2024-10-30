const myLibrary = [];

function Book (title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.toggleRead = function() {
    this.status= !this.status;
}

function toggleRead (index) {
    myLibrary[index].toggleRead();
    render();
}
function render() {
    let libraryEl = document.querySelector('#library');
    libraryEl.innerHTML = "";
    for (i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
        <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">${book.author}</h5>
        </div>
        <div class="card-body">
            <p>${book.pages} pages </p>
            <p class="read-status">${book.status ? "Read" : "Not Read Yet"}</p>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
            <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle</button>
        </div>
        `;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary (){
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status = document.getElementById("status").checked;
    let newBook = new Book (title, author, pages, status);
    myLibrary.push(newBook);
    render();

} 

let newBook = document.querySelector('#addBookBtn');
newBook.addEventListener("click", function(){
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = "block";
})
document.querySelector('#new-book-form').addEventListener("submit", function(){
    event.preventDefault();
    addBookToLibrary();
})