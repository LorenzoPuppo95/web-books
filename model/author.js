export default class Author {
    constructor(name, yob, yod) {
        this.name = name;
        this.yob = yob;
        this.yod = yod;
    }

    calculateAge() {
        let result="";
        if (this.yob === null) {
            return result = "pippo";
        } else if (this.yob !== null && this.yod === null) {
            const now = new Date();
            const actualYear = now.getFullYear();
            return result = actualYear - this.yob;
        } else {
            return result = this.yod - this.yob;
        }
    }
}