import type Book from "./types";
import { v4 as uuidV4 } from 'uuid';

const getItem = (): Book[] => {
  const books: string | null = localStorage.getItem('books')
  const bookArray = books ? JSON.parse(books) : [];
  return bookArray;
}
export const bookArray = getItem()
export class Library implements Book {
  title;
  author;
  id;

  constructor(title: string, author: string, id: string) {
    this.title = title;
    this.author = author;
    this.id = id
  }

  // getItem(): Book[] {
  //   const books: string | null = localStorage.getItem('books')
  //   const bookArray = books ? JSON.parse(books) : [];
  //   return bookArray;
  // }

  setItem(newBook: Book[]): void {
    const item: string = JSON.stringify(newBook);
    localStorage.setItem('books', item)
  }

  addBook(newBook: Book): void {
    const bookArrayNew = bookArray.concat(newBook)
    this.setItem(bookArrayNew);
  }


  
  createList = (newBook: Book) => {
    const li = document.createElement('li');
    li.textContent = `${newBook.title}  by ${newBook.author}`;
    const button = document.createElement('button');
    button.setAttribute('class', 'rmItem');
    li.setAttribute('class', 'fs-3 mt-1 p-2');
    button.innerHTML = 'Remove';
    // button.addEventListener('click', newBook.removeBook);
    li.appendChild(button);
    const ul = document.getElementById('bookList') as HTMLUListElement;
    ul.appendChild(li);
  }

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

  
}

export const getNewBook = (): Book => {
  const title = document.getElementById('title') as HTMLInputElement;
  const author = document.getElementById('title') as HTMLInputElement;
  const bookObj = { title: title.value, author: author.value, id: uuidV4() };
  return bookObj
}

