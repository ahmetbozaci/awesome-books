/* eslint-disable no-unused-vars, no-use-before-define, class-methods-use-this */

const bookArray = localStorage.getItem('books')
  ? JSON.parse(localStorage.getItem('books'))
  : [];
localStorage.setItem('books', JSON.stringify(bookArray));
const library = JSON.parse(localStorage.getItem('books'));

class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title !== '' && author !== '') {
      const newBook = new Library(title, author);
      bookArray.push(newBook);
      localStorage.setItem('books', JSON.stringify(bookArray));
      this.createList(newBook);
    }
  }

  removeBook(e) {
    const takeItem = document.querySelectorAll('.rmItem');
    const bookIndex = bookArray.indexOf.call(takeItem, e.target);
    bookArray.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(bookArray));
    const updatedLibrary = JSON.parse(localStorage.getItem('books'));
    document.getElementById('bookList').innerHTML = '';
    updatedLibrary.forEach((item) => {
      const libr = new Library(item.title, item.author);
      libr.createList(libr);
    });
  }

  createList(newBook) {
    const li = document.createElement('li');
    li.textContent = `${newBook.title} - by ${newBook.author}`;
    const button = document.createElement('button');
    button.setAttribute('class', 'rmItem');
    li.setAttribute('class', 'fs-3 mt-1 p-2');
    button.innerHTML = 'Remove';
    button.addEventListener('click', newBook.removeBook);
    li.appendChild(button);
    const ul = document.getElementById('bookList');
    ul.appendChild(li);
  }
}

const lib = new Library();
library.forEach((item) => {
  const libr = new Library(item.title, item.author);
  lib.createList(libr);
});
/* eslint-enable no-unused-vars, no-use-before-define, class-methods-use-this */

const time = document.getElementById("local-time")
const now = luxon.DateTime.now()
time.innerHTML = now.toLocaleString(luxon.DateTime.DATETIME_MED)