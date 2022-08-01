class Library {
  constructor() {
    this.books = [];
    this.outStore = [];
  }

  searchBook(data) {
    if (!this.books.includes(data)) return `${data} 不存在`;
    else if (this.books.includes(data) && !this.outStore.includes(data))
      return `${data} 可借閱`;
    else return `${data} 已借出`;
  }

  addBook(data) {
    this.books.push(data);
    return `新增書本： ${data}`;
  }

  borrowBook(data) {
    if (this.books.includes(data) && !this.outStore.includes(data)) {
      this.outStore.push(data);
      return `借出書本： ${data}`;
    } else return `${data} 不存在`;
  }

  returnBook(data) {
    let idx = this.outStore.indexOf(data);

    this.outStore.splice(idx, 1);

    return `歸還書本： ${data}`;
  }
}

const library = new Library();

console.log(library.searchBook("你不知道的JavaScript"));

console.log(library.addBook("你不知道的JavaScript"));
console.log(library.searchBook("你不知道的JavaScript"));

console.log(library.borrowBook("你不知道的JavaScript"));
console.log(library.searchBook("你不知道的JavaScript"));

console.log(library.returnBook("你不知道的JavaScript"));
console.log(library.searchBook("你不知道的JavaScript"));
