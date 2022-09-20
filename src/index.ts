import insertTime from './time';
import UI from './UI';
import Library from './library';
import { v4 as uuidV4 } from 'uuid';
import Store from "./store";

insertTime();

//! Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//! Event: Add a Book
const form: HTMLFormElement = document.querySelector('form') as HTMLFormElement;
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleInput: HTMLInputElement = document.getElementById('title') as HTMLInputElement;
  const titleValue = titleInput.value;
  const authorInput: HTMLInputElement = document.getElementById('author') as HTMLInputElement
  const authorValue = authorInput.value;

  if (titleValue === '' || authorValue === '') {
    UI.showAlert('Please fill in all fields', 'danger')
  } else {
    const book = new Library(titleValue, authorValue, uuidV4())
    UI.addBookToList(book)
    Store.addBook(book)
    UI.showAlert('Book added successfully', 'success')
    UI.clearInputs();
  }
})

//! Event: Remove Book
document.getElementById('bookList')?.addEventListener('click', (event) => {
  const target: HTMLUListElement = event.target as HTMLUListElement
  const { id } = target.parentElement as HTMLLIElement;
  UI.deleteBook(target);
  Store.removeBook(id)
  UI.showAlert('Book Removed', 'info')
})