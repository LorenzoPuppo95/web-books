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
        const booksContainer = document.createElement('div');
        const coverContainer = document.createElement('div');
        coverContainer.style.width=`300px`;
        coverContainer.style.height=`300px`;
        coverContainer.style.background = `url(${books.coverimage})`;
        booksContainer.classList.add('books-container-son');
        const titleContainer = createTextElement('h2', books.title);
        const authorContainer = document.createElement('div');
        // creazione stringa di testo per gli autori
        for (let i = 0; i < books.authorsArray.length; i++) {
            const author = books.authorsArray[i];
            let text = author.name;
            if (author.yob !== null) {
                text += " " + author.yob;
                if (author.yod !== null) {
                    text += "-" + author.yod;
                }
                text += "(" + author.calculateAge() + ")";
            }
            const authorSpan = createTextElement('span', text);
            authorContainer.appendChild(authorSpan);
        }
        const summaryContainer = createTextElement('h4', books.summary);
        const subjectsContainer = createTextElement('h4', books.subjects);
        booksContainer.append(coverContainer,titleContainer,authorContainer,summaryContainer,subjectsContainer);
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