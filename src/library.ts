import type Book from "./types";

export default class Library implements Book {
  title: string;
  author: string;
  id: string;

  constructor(title: string, author: string, id: string) {
    this.title = title;
    this.author = author;
    this.id = id
  }
}
