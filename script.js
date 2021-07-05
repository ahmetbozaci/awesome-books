/* eslint-disable no-unused-vars */
const bookArray = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}
function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const newBook = new Book(title, author);
  bookArray.push(newBook);
}

function displayBooks() {
  let book = '';
  for (let i = 0; i < bookArray.length; i += 1) {
    book = `${i + 1}. ${bookArray[i].title} - ${bookArray[i].author} <br>`;
  }
  document.getElementById('bookList').innerHTML += book;
}
/* eslint-enable no-unused-vars */