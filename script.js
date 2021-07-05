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

function displayBooks() {
    
    for (let i = 0; i < bookArray.length; i++){ 
      let item = document.createElement("li"); 
      let title = document.createTextNode("titletest")
      //let title = bookArray[i].title;
      //let author = bookArray[i].author;
      item.appendChild(title)
      document.getElementById("bookList").appendChild(item);
  }
}

