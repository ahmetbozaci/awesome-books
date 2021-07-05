function Books (title, author) {
    this.title = title;
    this.author = author;
}

const bookInfo = new Books("1984", "Author Name");


document.getElementById("boo").innerHtml = bookInfo.title + bookInfo.author;