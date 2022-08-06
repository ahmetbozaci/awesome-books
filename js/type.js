"use strict";
const getItem = () => {
    const books = localStorage.getItem('books');
    const bookArray = books ? JSON.parse(books) : [];
    return bookArray;
};
const bookArray = getItem();
const setItem = () => {
    const item = JSON.stringify(getItem());
    localStorage.setItem('books', item);
};
class Library {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
const getElements = () => {
    const title = document.getElementById('title');
    const author = document.getElementById('title');
    const bookObj = { title: title.value, author: author.value };
    return bookObj;
};
const addBook = () => {
    const bookDetail = getElements();
    const { title, author } = bookDetail;
    const newBook = new Library(title, author);
    // bookArray.push(newBook);
    setItem();
    // this.createList(newBook);
};
addBook();
//   removeBook(e) {
//     const takeItem = document.querySelectorAll('.rmItem');
//     const bookIndex = bookArray.indexOf.call(takeItem, e.target);
//     bookArray.splice(bookIndex, 1);
//     localStorage.setItem('books', JSON.stringify(bookArray));
//     const updatedLibrary = JSON.parse(localStorage.getItem('books'));
//     document.getElementById('bookList').innerHTML = '';
//     updatedLibrary.forEach((item) => {
//       const (libr = new Library(item.title, item.author);
//       libr.createList(libr);
//     });
//   }
//   createList(newBook) {
//     const li = document.createElement('li');
//     li.textContent = `${newBook.title}  by ${newBook.author}`;
//     const button = document.createElement('button');
//     button.setAttribute('class', 'rmItem');
//     li.setAttribute('class', 'fs-3 mt-1 p-2');
//     button.innerHTML = 'Remove';
//     button.addEventListener('click', newBook.removeBook);
//     li.appendChild(button);
//     const ul = document.getElementById('bookList');
//     ul.appendChild(li);
//   }
// }
