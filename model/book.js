export default class Book {
    constructor(title, authorsArray = [], summary, subjects, coverimage) {
        this.title = title;
        this.authorsArray = authorsArray;
        this.summary = summary;
        this.subjects = subjects;
        this.coverimage = coverimage;
    }
}


//loggare array di libri dopo la fetch
//creare le classi libro ed autore
//-libro = title (string), authors (array di autori), summary (stringa, il primo dei summary),subjects(array di stringhe), cover image (stringa, link in formats)
//-autore = name, yob, yod => se entrambe calcola età, se niente nulla, se solo nascita calcola età attaule
//traducete il dato grezzo in oggetti
//creare una visualizzazione di schede libro con i dati disponibili
//mettere un tasto che permetta di mettere in ordine i libri per titolo