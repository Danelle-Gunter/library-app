let myLibrary = [
    {
        "title":"Jane Eyre",
        "author":"Charlotte Bronte"
    },
    {
        "title":"Pride and Prejudice",
        "author":"Jane Austen"
    },
    {
        "title":"Princess of Mars",
        "author":"Edgar Rice Burroughs"
    }
];

function Book(title, author) {
    this.title = title;
    this.author = author;   
}

function addBookToLibrary() {
    let bookTitle = document.querySelector('#book-title');
    let bookAuthor = document.querySelector('#book-author');

    let book = new Book(bookTitle, bookAuthor);
    
    myLibrary.push(book); 
}

function displayLibrary(array) {
    const bookDisplay = document.querySelector('#book-display');

    myLibrary.forEach((book) => {
        const item = document.createElement('p');
        item.textContent = `${book.title} by ${book.author}`;
        bookDisplay.appendChild(item);
    });
}

const addBookBtn = document.querySelector('#show-form-btn');

// the Add Book button will make the form appear
addBookBtn.addEventListener('click', () => {   
    const formSection = document.querySelector('.visible');
    formSection.classList.toggle('visible');
    addBookBtn.classList.toggle('visible');
});

displayLibrary();