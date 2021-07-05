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
    book = `<li id="${i + 1}"> ${bookArray[i].title} - ${bookArray[i].author} <button type='button' onclick="removeBook()">Remove Book</button><li><hr>  `;
  }
  document.getElementById('bookList').innerHTML += book;
}

function removeBook() {
}
/* eslint-enable no-unused-vars */