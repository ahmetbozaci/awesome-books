const bookArray = []

function Book (title, author) {
    this.title = title;
    this.author = author;
}
function addBook() {
  let title = document.getElementById("title").value
  let author = document.getElementById("author").value
  const newBook = new Book(title, author);
  bookArray.push(newBook)
}

function displayBooks() {
    let book = ""
    for (let i = 0; i < bookArray.length; i++){ 
       book = `${bookArray[i].title} ${bookArray[i].author} <br>`
  }
  document.getElementById("bookList").innerHTML += book
}

