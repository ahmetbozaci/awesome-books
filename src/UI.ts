import Store from "./store";
import type Book from "./types";

export default class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book: Book) => UI.addBookToList(book));
  }

  static addBookToList(book: Book): void {
    const ul = document.getElementById('bookList') as HTMLUListElement;
    const li = document.createElement('li');
    const button = document.createElement('button');

    li.textContent = `${book.title}  by ${book.author}`;
    li.id = book.id; 
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