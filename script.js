const bookArray = []

function Books (title, author) {
    this.title = title;
    this.author = author;
}
function addBook () {
  let title = document.getElementById("title").value
  let author = document.getElementById("author").value
  const newBook = new Books(title, author);
  bookArray.push(newBook)
}

function displayBooks () {
    for (let i = 0; i < bookArray.length; i++) {
        console.log(bookArray[i].title);
    }
}

document.getElementById("boo").innerHTML = bookInfo.title + bookInfo.author;