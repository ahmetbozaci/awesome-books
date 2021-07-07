/* eslint-disable no-unused-vars */
let bookArray = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
localStorage.setItem('books', JSON.stringify(bookArray));
const library = JSON.parse(localStorage.getItem('books'));

function Book(title, author) {
this.title = title;
this.author = author;
}

let i = 1
function removeBook(e) {
let takeItem = document.querySelectorAll('.rmItem')
let bookIndex = Array.prototype.indexOf.call(takeItem, e.target)
bookArray.splice(bookIndex, 1);
console.log(bookArray)
localStorage.setItem('books', JSON.stringify(bookArray))
console.log(localStorage)
const updatedLibrary = JSON.parse(localStorage.getItem('books'));
document.getElementById('bookList').innerHTML = "";
updatedLibrary.forEach(item => {createList(item.title, item.author)})
}
function createList(title, author) {
const li = document.createElement('li');
li.textContent = `${title} - by ${author}`;
let button = document.createElement('button');
button.classList.add('rmItem')
button.innerHTML = "Remove";
button.addEventListener('click', removeBook)
li.appendChild(button);
const ul = document.getElementById("bookList")
ul.appendChild(li);
}

function addBook() {
let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
const newBook = new Book(title, author);
bookArray.push(newBook);
localStorage.setItem('books', JSON.stringify(bookArray))
createList(title,author);
}


library.forEach(item => {createList(item.title, item.author)})
