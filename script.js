const bookArray = []

function Books (title, author) {
    this.title = title;
    this.author = author;
}
Books.prototype.addBook = function () {
  let title = document.getElementById("title").value
  let author = document.getElementById("author").value
  const newBook = new Books(title, author);
  bookArray.push(newBook)
}

// document.getElementById("boo").innerHTML = bookInfo.title + bookInfo.author;