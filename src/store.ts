import type Book from "./types";

export default class Store {

  static getBooks() {
    const books: string | null = localStorage.getItem('books')
    const bookArray = books ? JSON.parse(books) : [];
    return bookArray;
  }

  static setItem(books: Book):void {
    localStorage.setItem('books', JSON.stringify(books));
  }

  static addBook(book: Book):void {
    const books = Store.getBooks()
    books.push(book);
    Store.setItem(books);
  }

  static removeBook(id: string):void {
    const books = Store.getBooks();
    books.forEach((book: Book, index: number) => {
      if (book.id === id) {
        books.splice(index, 1)
      }
    })
    Store.setItem(books)
  }
}