// Javascript crazy object notation

// function Player(name: string, marker: string) {
//     this.name = name;
//     this.marker = marker;
// }

// Typescript beautiful object creation

interface Player {
    name: string;
    marker: string;
}

let arthur = { name: 'name', marker: 'a1' };

arthur.name = 'arthur';

let player1 = arthur as Player;

console.log(player1.name);

interface IBook {
    id: string;
    title?: string;
    author?: string;
    pages?: number;
    publish_date?: Date;
    rea?: boolean;
}

class Book implements IBook {
    id: string;
    title?: string;
    author?: string;
    pages?: number;
    publish_date?: Date;
    read?: boolean;

    constructor(id: string) {
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
console.log(book.read!);

console.log(`All good`);

console.log(Object.getPrototypeOf(book) === Book.prototype);
console.log(Book.prototype);
console.log();
