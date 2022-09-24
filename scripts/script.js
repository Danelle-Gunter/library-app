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

const showFormBtn = document.querySelector('#show-form-btn');

// the Add Book button will make the form appear
showFormBtn.addEventListener('click', () => {   
    const formSection = document.querySelector('.visible');
    formSection.classList.toggle('visible');
    showFormBtn.classList.toggle('visible');
});

const addBookBtn = document.querySelector('#add-book');
const formElm = document.querySelector('#library-form');

addBookBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    new FormData(formElm);
});

formElm.addEventListener('formdata', (e) => {
    console.log('formdata fired');

    let display = '';
    const data = e.formData;
    for (const value of data.values()) {
        display += value;
    }

    alert(display);
});

// the form works, I just need to figure out how to push the data to the array

displayLibrary();