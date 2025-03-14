import DataService from "./services/data-service.js";

const service = new DataService();

function getBooks(){
    const bookPromise = service.getBooksData();
    bookPromise.then(bookData => render(bookData));
}
window.getBooks = getBooks;

function titleSort() {
    const bookPromise = service.getBooksByTitle();
    bookPromise.then(bookData => render(bookData));
}
window.titleSort = titleSort;

getBooks();

function render(booksData) {
    const container = document.getElementById('books-container');
    container.innerHTML = '';
    booksData.forEach(books => {
        const booksContainer = document.createElement('a');
        booksContainer.href = "/detail.html?id=" + books.id;
        booksContainer.classList.add('book-card');
        const coverContainer = document.createElement('div');
        coverContainer.classList.add('cover-container');
        coverContainer.style.background = `url(${books.coverimage})`;
        booksContainer.classList.add('books-container-son');
        const titleContainer = createTextElement('textarea', books.title);
        titleContainer.rows = "3";
        titleContainer.classList.add('book-title');
        titleContainer.readOnly = true;
        titleContainer.disabled = true;
        booksContainer.append(coverContainer,titleContainer);
        container.appendChild(booksContainer);
    });
}

function createTextElement(elementType, text) {
    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}

const titleButton = document.getElementById('title-button');
titleButton.addEventListener('click', titleSort);