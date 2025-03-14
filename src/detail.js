import DataService from "./services/data-service.js";

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const idString = getParameterByName('id');
// console.log(queryParams);
const description = document.getElementById("description");
description.textContent += " - ID " + idString;

const id = Number(idString);
// console.log(id);

const service = new DataService();

const bookPromise = service.getBookFromID(id);
bookPromise.then(book => renderBook(book));

function renderBook(book) {
    console.log(book);
    const container = document.getElementById('chosen-book-container');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = book.coverimage;
    imageContainer.classList.add('chosen-image-container');
    imageContainer.appendChild(image);
    const titleContainer = createTextElement('h2', book.title);
    titleContainer.classList.add('chosen-book-title');
    const authorContainer = document.createElement('div');
    authorContainer.classList.add('chosen-book-authors');
    // creazione stringa di testo per gli autori
    for (let i = 0; i < book.authorsArray.length; i++) {
        const author = book.authorsArray[i];
        let text = author.name;
        if (author.yob !== null) {
            text += " " + author.yob;
            if (author.yod !== null) {
                text += "-" + author.yod;
            }
            text += " (" + author.calculateAge() + " years old)";
        }
        const authorSpan = createTextElement('h3', text);
        authorContainer.appendChild(authorSpan);
    }
    const summaryContainer = document.createElement("div");
    const summaryText = createTextElement('span', book.summary);
    summaryContainer.appendChild(summaryText);
    summaryContainer.classList.add('chosen-book-summary');
    const subjectsContainer = document.createElement("div");
    let subjectText = "";
    for (let i = 0; i < book.subjects.length; i++) {
        subjectText += book.subjects[i];
        if (i < book.subjects.length - 1) {
            subjectText += " / ";
        }
    }
    const subjectsText = createTextElement('h4', subjectText);
    subjectsContainer.appendChild(subjectsText);
    subjectsContainer.classList.add('chosen-book-subjects');
    container.append(imageContainer, titleContainer, authorContainer, summaryContainer, subjectsContainer);
}

function createTextElement(elementType, text) {
    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}