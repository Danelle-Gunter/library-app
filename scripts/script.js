let myLibrary = [
    // {
    //     "title":"Jane Eyre",
    //     "author":"Charlotte Bronte"
    // },
    // {
    //     "title":"Pride and Prejudice",
    //     "author":"Jane Austen"
    // },
    // {
    //     "title":"Princess of Mars",
    //     "author":"Edgar Rice Burroughs"
    // }
];

function renderBookList(book) {
    const list = document.querySelector('#book-display');

    const node = document.createElement('li');
    
    node.textContent = `${book.title}`;

    list.append(node);
}

function addBook(title) {
    const newBook = {
        title,
        // author,
        // checked: false
    }
    
    myLibrary.push(newBook);
    renderBookList(newBook);
}

const form = document.querySelector('#library-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('#book-title');

    const text = input.value.trim();
    if (text !== '') {
        addBook(text);
        input.value = '';
        input.focus();
    }

});

// function displayLibrary(array) {
//     const bookDisplay = document.querySelector('#book-display');

//     myLibrary.forEach((book) => {
//         const item = document.createElement('p');
//         item.textContent = `${book.title} by ${book.author}`;
//         bookDisplay.appendChild(item);
//     });
// }

const showFormBtn = document.querySelector('#show-form-btn');

// the Add Book button will make the form appear
showFormBtn.addEventListener('click', () => {   
    const formSection = document.querySelector('.visible');
    formSection.classList.toggle('visible');
    showFormBtn.classList.toggle('visible');
});

// const addBookBtn = document.querySelector('#add-book');
// const formElm = document.querySelector('#library-form');

// addBookBtn.addEventListener('submit', (e) => {
//     e.preventDefault();
//     new FormData(formElm);
// });

// formElm.addEventListener('formdata', (e) => {
//     console.log('formdata fired');

//     let display = [];
//     const data = e.formData;
//     for (const value of data.values()) {
//         display.push(value);
//     }

//     console.log("What's put in myLibrary");
//     console.log(display);
//     addBookToLibrary(display);
// });

// function addBookToLibrary(array) {
//     let bookTitle = array[0];
//     let bookAuthor = array[1];

//     let book = new Book(bookTitle, bookAuthor);
    
//     myLibrary.push(book);

//     console.log("Showing myLibrary:");
//     console.table(myLibrary);
// }

// console.log('What myLibrary looks like at the start');
// console.table(myLibrary);
// displayLibrary();