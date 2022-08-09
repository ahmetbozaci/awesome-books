import insertTime from './time';
import { getNewBook, Library, bookArray } from './book';


insertTime();

const run = () => {
  const form = document.getElementById('form') as HTMLButtonElement;
  form.addEventListener('click', () => {
    const bookObj = getNewBook();
    const library = new Library(bookObj.title, bookObj.author, bookObj.id);
    library.addBook(bookObj);
  })
}
// const bookObj = getNewBook();
// const library = new Library(bookObj.title, bookObj.author, bookObj.id);
// bookArray.forEach(item => {
//   library.createList(item)
// })
run();