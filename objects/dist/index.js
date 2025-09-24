"use strict";
// Javascript crazy object notation
Object.defineProperty(exports, "__esModule", { value: true });
let arthur = { name: 'name', marker: 'a1' };
arthur.name = 'arthur';
let player1 = arthur;
console.log(player1.name);
class Book {
    id;
    title;
    author;
    pages;
    publish_date;
    read;
    constructor(id) {
        this.id = id;
    }
}
let book = new Book('ididid');
book.title = 'Linear Algebra';
book.author = 'Georgi E. Shilov';
book.pages = 387;
console.log(book.id);
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.read);
console.log(`All good`);
console.log(Object.getPrototypeOf(book) === Book.prototype);
console.log(Book.prototype);
console.log();
//# sourceMappingURL=index.js.map