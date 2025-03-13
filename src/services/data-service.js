import Author from "../../model/author.js";
import Book from "../../model/book.js";

export default class DataService {
    constructor() { }
    getBooksData() {
        const booksPromise = fetch('../../assets/books.json')
            .then((resp) => resp.json())
            .then((jsonData) => {
                const books = this.createBooksFromRawData(jsonData);
                return books;
            })
            .catch((error) => console.log(error));
        console.log(booksPromise);
        return booksPromise;
    }

    getBooksByTitle() {
        return this.getBooksData().then(books => {
            const booksClone = books.slice();
            booksClone.sort((b1, b2) => b1.compareByTitle(b2));
            return booksClone;
        })      
    }

    createBooksFromRawData(data) {
        const books = [];
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const authorArray = [];
            for (let i = 0; i < element.authors.length; i++) {
                const author = element.authors[i];    
                const newAuthor = new Author(author.name, author.birth_year, author.death_year);
                authorArray.push(newAuthor);
            }
            const newBook = new Book(element.title, authorArray, element.summaries[0], element.subjects, element.formats["image/jpeg"]);
            books.push(newBook);
        }
        return books;
    }
}