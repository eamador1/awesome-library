document.addEventListener('DOMContentLoaded', () => {
  let library = [
    {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel Garcia Marquez',
    },
    {
      title: 'Around the World in Eighty Days',
      author: 'Jules Verne',
    },
  ];

  library = JSON.parse(localStorage.getItem('library')) || [];

  const $books = document.querySelector('.displayLibrary');

  function displayBooks() {
    $books.innerHTML = '';
    library.forEach((book) => {
      const $contBook = document.createElement('div');
      const $title = document.createElement('h6');
      const $author = document.createElement('h6');
      const $delete = document.createElement('button');
      const $division = document.createElement('hr');

      $contBook.classList.add('cont-book');
      $title.classList.add('title');
      $author.classList.add('author');
      $delete.classList.add('delete');

      $title.innerText = book.title;
      $author.textContent = book.author;
      $delete.innerHTML = 'Delete';
      $delete.setAttribute('id', 'delete');

      $contBook.appendChild($title);
      $contBook.appendChild($author);
      $contBook.appendChild($delete);
      $contBook.appendChild($division);
      $books.appendChild($contBook);
    });
  }

  function updateLocalStorage() {
    localStorage.setItem('library', JSON.stringify(library));
  }

  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

  function addBookToLibrary() {
    console.log($captureAuthor.value)
    console.log($captureTitle.value)
    

    const newBook = new Book($captureTitle.value, $captureAuthor.value);
    library.push(newBook);
    updateLocalStorage();
    displayBooks();
    console.log($captureAuthor.value)
    console.log($captureTitle.value)
  }

  function emptyForm() {
    const $form = document.querySelector('.addForm');
    $form.reset();
  }

  const $form = document.querySelector('.addForm');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    emptyForm();
  });

  function deleteBook(index) {
    library.splice(index, 1);
    updateLocalStorage();
    displayBooks();
  }

  $books.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
      const bookIndex = Array
        .from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
      deleteBook(bookIndex);
    }
  });

  displayBooks(); // Call the function to display books initially.
  
}); 

