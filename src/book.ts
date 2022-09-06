import type Book from "./types";
import { v4 as uuidV4 } from 'uuid';

// const getItem = (): Book[] => {
//   const books: string | null = localStorage.getItem('books')
//   const bookArray = books ? JSON.parse(books) : [];
//   return bookArray;
// }
// export const bookArray = getItem()

//! Book Class
export class Library implements Book {
  title;
  author;
  id;

  constructor(title: string, author: string, id: string) {
    this.title = title;
    this.author = author;
    this.id = id
  }
}

//!  Class for UI
class UI {
  static displayBooks() {
    const StoredBooks: Book[] = [
      {
        title: 'Book One',
        author: 'Book One',
        id: uuidV4()
      }
    ]
    const books = StoredBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book: Book): void {
    const ul = document.getElementById('bookList') as HTMLUListElement;
    const li = document.createElement('li');
    const button = document.createElement('button');

    li.textContent = `${book.title}  by ${book.author}`;
    li.setAttribute('class', 'fs-3 mt-1 p-2');

    button.setAttribute('class', 'rmItem');
    button.innerHTML = 'Remove';

    li.appendChild(button);
    ul.appendChild(li);
  }

  static deleteBook(element: HTMLElement) {
    if (element.classList.contains('rmItem')) {
      element.parentElement?.remove();
    }
  }

  static showAlert(message: string, className: string): void {
    const container = document.querySelectorAll('.test')
    container.forEach(item => item.innerHTML = message);
    container.forEach(item => item.classList.add('alert', `alert-${className}`))
    console.log(container)
    setTimeout(() => container.forEach(item => { item.innerHTML = ''; item.classList.remove('alert'); }), 2000)
  }

  static clearInputs(): void {
    const titleInput = document.getElementById('title') as HTMLInputElement;
    const authorInput = document.getElementById('author') as HTMLInputElement;
    titleInput.value = '';
    authorInput.value = '';
  }
}

//! Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//! Event: Add a Book
const form = document.querySelector('form') as HTMLFormElement
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleInput = document.getElementById('title') as HTMLInputElement;
  const titleValue = titleInput.value;
  const authorInput = document.getElementById('author') as HTMLInputElement
  const authorValue = authorInput.value;

  if (titleValue === '' || authorValue === '') {
    UI.showAlert('Please fill in all fields', 'danger')
  } else {
    const book = new Library(titleValue, authorValue, uuidV4())
    UI.addBookToList(book)
    UI.showAlert('Book added successfully', 'success')
    UI.clearInputs();
  }


})
//! Event: Remove Book
document.getElementById('bookList')?.addEventListener('click', (event) => {
  const target = event.target as HTMLUListElement
  UI.deleteBook(target);
  UI.showAlert('Book Removed', 'info')
})

  // getItem(): Book[] {
  //   const books: string | null = localStorage.getItem('books')
  //   const bookArray = books ? JSON.parse(books) : [];
  //   return bookArray;
  // }

  // setItem(newBook: Book[]): void {
  //   const item: string = JSON.stringify(newBook);
  //   localStorage.setItem('books', item)
  // }

  //! DONE
  // addBook(): void {
  //   const newBook = { title: this.title, author: this.author, id: this.id }
  //   const bookArrayNew = bookArray.concat(newBook)
  //   this.setItem(bookArrayNew);
  // }



  // createList = (newBook: Book) => {
  //   const li = document.createElement('li');
  //   li.textContent = `${newBook.title}  by ${newBook.author}`;
  //   const button = document.createElement('button');
  //   button.setAttribute('class', 'rmItem');
  //   li.setAttribute('class', 'fs-3 mt-1 p-2');
  //   button.innerHTML = 'Remove';
  //   // button.addEventListener('click', newBook.removeBook);
  //   li.appendChild(button);
  //   const ul = document.getElementById('bookList') as HTMLUListElement;
  //   ul.appendChild(li);
  // }

  // removeBook = (e) => {
  //   const takeItem = document.querySelectorAll('.rmItem');
  //   const bookIndex = bookArray.indexOf.call(takeItem, e.target);
  //   bookArray.splice(bookIndex, 1);
  //   localStorage.setItem('books', JSON.stringify(bookArray));
  //   const updatedLibrary = JSON.parse(localStorage.getItem('books'));
  //   document.getElementById('bookList').innerHTML = '';
  //   updatedLibrary.forEach((item) => {
  //     const libr = new Library(item.title, item.author);
  //     libr.createList(libr);
  //   });
  // }


//}

// export const getNewBook = (): Book => {
//   const title = document.getElementById('title') as HTMLInputElement;
//   const author = document.getElementById('title') as HTMLInputElement;
//   const bookObj = { title: title.value, author: author.value, id: uuidV4() };
//   return bookObj
// }

