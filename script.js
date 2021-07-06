/* eslint-disable no-unused-vars */
let bookArray = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
localStorage.setItem('books', JSON.stringify(bookArray));
const library = JSON.parse(localStorage.getItem('books'));

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function createList(title,author){
  const li = document.createElement('li')
  li.textContent = `${title} - by ${author}`
  let button = document.createElement('button');
  button.innerHTML = "Submit";
  button.onclick = function(itemId){
    let item = document.getElementById(itemId);
    item.parentNode.removeChild(item);
    localStorage.function("item");
  }
  li.appendChild(button);
  const ul = document.getElementById("bookList")
  ul.appendChild(li);
  // document.body.appendChild(button);
  // let text = document.createTextNode("Button");
  // button.appendChild(text);
}

function addBook() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  const newBook = new Book(title, author);
  bookArray.push(newBook);
  localStorage.setItem('books', JSON.stringify(bookArray))
  createList(title,author);
}

library.forEach(item => {createList(item.title,item.author)})

// function removeItem(itemId) {
//   let item = document.getElementById(itemId);
//   item.parentNode.removeChild(item);
//   localStorage.removeItem("item");
// }
