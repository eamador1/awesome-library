class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('library')) || [];
  }

  addBook(title, author) {
    const newBook = { title, author };
    this.books.push(newBook);
    this.updateLocalStorage();
    this.displayBooks();
  }

  deleteBook(index) {
    this.books.splice(index, 1);
    this.updateLocalStorage();
    this.displayBooks();
  }

  updateLocalStorage() {
    localStorage.setItem('library', JSON.stringify(this.books));
  }

  displayBooks() {
    const $books = document.querySelector('.displayLibrary');
    $books.innerHTML = '';

    this.books.forEach((book, index) => {
      const $contBook = document.createElement('div');
      const $title = document.createElement('h6');
      const $author = document.createElement('h6');
      const $delete = document.createElement('button');

      $contBook.classList.add('cont-book');
      $title.classList.add('titleBook');
      $author.classList.add('authorBook');
      $delete.classList.add('delete');

      $title.innerText = book.title;
      $author.textContent = book.author;
      $delete.innerHTML = 'Remove';

      $contBook.appendChild($title);
      $contBook.appendChild($author);
      $contBook.appendChild($delete);

      $delete.addEventListener('click', () => this.deleteBook(index));

      $books.appendChild($contBook);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myLibrary = new Library();

  function emptyForm() {
    const $form = document.querySelector('.addForm');
    $form.reset();
  }

  function addBookToLibrary() {
    const $captureTitle = document.querySelector('#title');
    const $captureAuthor = document.querySelector('#author');
    myLibrary.addBook($captureTitle.value, $captureAuthor.value);
    emptyForm();
  }

  const $form = document.querySelector('.addForm');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
  });

  const $books = document.querySelector('.displayLibrary');
  $books.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
      const bookIndex = Array
        .from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
      myLibrary.deleteBook(bookIndex);
    }
  });

  myLibrary.displayBooks(); // Call the method to display books initially.
});