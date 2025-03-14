export default class Book {
    constructor(title, authorsArray = [], summary, subjects, coverimage, id) {
        this.title = title;
        this.authorsArray = authorsArray;
        this.summary = summary;
        this.subjects = subjects;
        this.coverimage = coverimage;
        this.id = id;
    }

    compareByTitle(secondBook) {
        const myTitle = this.title;
        const yourTitle = secondBook.title;
        return myTitle.localeCompare(yourTitle);
    }
}