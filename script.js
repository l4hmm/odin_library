// Create array to store books
const myLibrary = [];

// Constructor for new books

class Book {
    constructor(name, author, pages, read){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// Function to add book to library

function addBookToLibrary() {
    // Get user input
    const name = document.getElementById("bookName").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("bookPages").value;
    const read = document.getElementById("bookRead").checked;

    // Data Validation with pop up
    if (name === "" || author === "" || pages ===""){
        // Show pop up message
        document.getElementById("popup-message").textContent = "Please fill in all fields.";
        document.getElementById("popup").style.display = "flex"; // Make pop up visilbe
        return;
    }
    
    // Clear previous message
    document.getElementById("popup-message").textContent = "";

    // Create new book object
    const newBook = new Book(name, author, pages, read);

    // Add new object to array
    myLibrary.push(newBook);

    // clear input fields for next input
    document.getElementById("bookName").value= "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookPages").value = "";
    document.getElementById("bookRead").checked = false;
  
     displayBooks();
}

// Display book in library

function displayBooks() {
    // Clear current display
    const bookGrid = document.querySelector(".book-grid");
    bookGrid.innerHTML = "";

    // Add random image to book card
    const imageArray = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

    // Loop through each object in the array
    myLibrary.forEach((book) => {
        // Create new book card
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        // Add random image to book card
        const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
        const bookImage = document.createElement("img");
        bookImage.src = `images/${randomImage}`;
        bookImage.alt = `Random Book Image`;
        bookImage.classList.add("book-image");
        bookCard.appendChild(bookImage);

        // Add heading to card
        const bookHeading = document.createElement("h3");
        bookHeading.textContent = book.name;
        bookCard.appendChild(bookHeading);

        // Add author to card
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = ` By${book.author}`;
        bookCard.appendChild(bookAuthor);

        // Create container for bottom info
        const bottomInfo = document.createElement("div");
        bottomInfo.classList.add("bottom-info");

        // Add pages to bottom info
        const bookPages = document.createElement("p");
        bookPages.textContent = `Pages: ${book.pages}`;
        bottomInfo.appendChild(bookPages);

        // Add read status to bottom info
        const bookRead = document.createElement("p");
        bookRead.textContent = `Status: ${book.read ? "Read" : "Not Read"}`;
        bottomInfo.appendChild(bookRead);

        // Append bottom info to the card
        bookCard.appendChild(bottomInfo);

        // Append the card to the grid
        bookGrid.appendChild(bookCard);
    });
}


// Handle pop up message
document.getElementById("popup-close").addEventListener("click", function(){
document.getElementById("popup").style.display = "none"; // Hide pop up when close button is clicked
});

document.addEventListener("DOMContentLoaded", function() {
    const addBookButton = document.getElementById("addBookButton");

    addBookButton.addEventListener("click", function(event) {
        event.preventDefault();

        addBookToLibrary();
    });
});




















// const sidebar = document.getElementById("sidebar");

//function toggleSidebar(){
//    sidebar.classList.toggle("show");
//}