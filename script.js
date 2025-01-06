// 1. Create an array to store books

const myLibrary = [];

// 2. create constructor to take user input and store books

class Book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// 3. Add a function to add books to library
function addBookToLibrary(){
  // get user input 
  const name = document.getElementById("bookName").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("bookPages").value;
  const read = document.getElementById("bookRead").checked;

  // Data validation
  if (name === "" || author === "" || pages === ""){
    alert ("Please fill in all fields.");
    return;
  }

  // create new book object

  const newBook = new Book(name, author, pages, read);


  // Add new book to array

  myLibrary.push(newBook);

  // clear input fields for next input

  document.getElementById("bookName").value= "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookPages").value = "";
  document.getElementById("bookRead").checked = false;
  
  displayBooks();
}


// 4. Add function to display books in library

function displayBooks(){
 // 1. clear cucrrent display
 const bookGrid = document.querySelector(".book-grid");
 bookGrid.innerHTML = "";

 // loop through each book in library
 myLibrary.forEach((book) => {

  // Create a new book card
  const bookcard = document.createElement("div");
  bookcard.classList.add("book-card");

  // create and add title
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = `Title: ${book.name}`;
  bookcard.appendChild(bookTitle);


 // create and add author
 const bookAuthor = document.createElement("p");
 bookAuthor.textContent = `Author: ${book.author}`;
 bookcard.appendChild(bookAuthor);


 // create and pages
 const bookPages = document.createElement("p");
 bookPages.textContent = `No. of Pages: ${book.pages}`;
 bookcard.appendChild(bookPages);

 // create and add read status

 const bookRead = document.createElement("p");
 bookRead.textContent = `Read: ${book.read ? "Yes" : "No"}`;
 bookcard.appendChild(bookRead);

 // append book to gird
 bookGrid.appendChild(bookcard);
 });
};

document.addEventListener("DOMContentLoaded", function(){
  const addBookButton = document.getElementById("addBookButton");

  addBookButton.addEventListener("click", function(event) {
    event.preventDefault();

    addBookToLibrary();
  });
});