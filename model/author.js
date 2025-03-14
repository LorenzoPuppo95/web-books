export default class Author {
    constructor(name, yob, yod) {
        this.name = name;
        this.yob = yob;
        this.yod = yod;
    }

    calculateAge() {
        let result = "";
        if (this.yob === null) {
            return result = null;
        } else if (this.yob !== null && this.yod === null) {
            const now = new Date();
            const actualYear = now.getFullYear();
            return result = actualYear - this.yob;
        } else {
            return result = this.yod - this.yob;
        }
    }
}

// const author=new Author("pippo", 1950, 1980);
// console.log(author);
// console.log(author.calculateAge());
// const author1=new Author("pippo", 1950, null);
// console.log(author1);
// console.log(author1.calculateAge());
// const author2=new Author("pippo", null, null);
// console.log(author2);
// console.log(author2.calculateAge());