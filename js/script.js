
class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
  const getElements = () => {
    const title = document.getElementById('title');
    const author = document.getElementById('title');
    const bookObj = { title: title.value, author: author.value };
    return bookObj;
  }

}
  
  const removeBook = (e) => {
    const takeItem = document.querySelectorAll('.rmItem');
    const bookIndex = bookArray.indexOf.call(takeItem, e.target);
    bookArray.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(bookArray));
    const updatedLibrary = JSON.parse(localStorage.getItem('books'));
    document.getElementById('bookList').innerHTML = '';
    updatedLibrary.forEach((item) => {
      const libr = new Library(item.title, item.author);
      libr.createList(libr);
    });
  }


addBook();
removeBook()
const lib = new Library();
bookArray.forEach((item) => {
  const libr = new Library(item.title, item.author);
  createList(libr);
});
