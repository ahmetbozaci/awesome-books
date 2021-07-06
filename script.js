/* eslint-disable no-unused-vars */
const bookArray = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
localStorage.setItem('books', JSON.stringify(bookArray));
const library = JSON.parse(localStorage.getItem('books'));
function Book(title, author) {
  this.title = title;
  this.author = author;
}

function createList(title, author) {
  const li = document.createElement('li');
  li.textContent = `${title} - by ${author}`;
  const button = document.createElement('button');
  button.innerHTML = 'Delete Book';
  button.setAttribute('class', 'remove');
  li.appendChild(button);
  const ul = document.getElementById('bookList');
  ul.appendChild(li);
}

function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const newBook = new Book(title, author);
  bookArray.push(newBook);
  localStorage.setItem('books', JSON.stringify(bookArray));
  createList(title, author);
}

library.forEach((item) => { createList(item.title, item.author); });